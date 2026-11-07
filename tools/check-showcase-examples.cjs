const fs = require("fs");
const path = require("path");
const assert = require("assert/strict");
const { spawnSync } = require("child_process");
const ts = require("typescript");

const workspace = path.resolve(__dirname, "..");
const docsDirectory = path.join(
  workspace,
  "projects/admin-panel/src/app/shared/component-documentation"
);

function readData(filename, symbol) {
  const source = fs.readFileSync(path.join(docsDirectory, filename), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  new Function("exports", compiled)(exports);
  return exports[symbol];
}

function componentFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory()
      ? componentFiles(filename)
      : entry.name.endsWith(".component.ts")
      ? [filename]
      : [];
  });
}

function actualApis() {
  return componentFiles(path.join(workspace, "projects/design-system/src/lib"))
    .map((filename) => {
      const source = ts.createSourceFile(
        filename,
        fs.readFileSync(filename, "utf8"),
        ts.ScriptTarget.Latest,
        true
      );
      const selector = source.text.match(/selector:\s*['"]([^'"]+)/)?.[1];
      const declaration = source.statements.find(ts.isClassDeclaration);
      if (!declaration) {
        return null;
      }
      const inputs = [];
      const outputs = [];
      const memberTypes = {};
      const aliases = Object.fromEntries(
        source.statements
          .filter(ts.isTypeAliasDeclaration)
          .map((alias) => [alias.name.text, alias.type.getText(source)])
      );
      for (const member of declaration.members) {
        for (const decorator of ts.canHaveDecorators(member)
          ? ts.getDecorators(member) || []
          : []) {
          const expression = decorator.expression;
          if (!ts.isCallExpression(expression)) {
            continue;
          }
          const kind = expression.expression.getText(source);
          if (!["Input", "Output"].includes(kind)) {
            continue;
          }
          const name =
            expression.arguments[0] &&
            ts.isStringLiteral(expression.arguments[0])
              ? expression.arguments[0].text
              : member.name.getText(source);
          (kind === "Input" ? inputs : outputs).push(name);
          const initializer = member.initializer?.getText(source) || "";
          let type =
            member.type?.getText(source) ||
            (ts.isSetAccessorDeclaration(member)
              ? member.parameters[0]?.type?.getText(source)
              : undefined);
          if (kind === "Output") {
            type = initializer.match(/EventEmitter<(.+)>/)?.[1] || "void";
          } else if (type && aliases[type]) {
            type = aliases[type];
          } else if (!type) {
            type =
              initializer === "true" || initializer === "false"
                ? "boolean"
                : /^["'`]/.test(initializer)
                ? "string"
                : /^\d/.test(initializer)
                ? "number"
                : initializer === "[]"
                ? "unknown[]"
                : "unknown";
          }
          memberTypes[kind + "." + name] = type
            .replace(/\s+/g, " ")
            .replace(/^\|\s*/, "");
        }
      }
      return {
        name: declaration.name.text,
        selector,
        inputs,
        outputs,
        memberTypes,
      };
    })
    .filter(Boolean);
}

async function main() {
  assert(
    fs.existsSync(path.join(workspace, "dist/design-system/index.d.ts")),
    "Build the library first: npx ng build design-system"
  );
  const { parseTemplate } = await import("@angular/compiler");
  const documentation = readData(
    "component-examples.data.ts",
    "COMPONENT_DOCUMENTATION"
  );
  const documentedApis = readData("component-api.data.ts", "COMPONENT_APIS");
  const sourceApis = actualApis();
  assert.equal(
    documentedApis.length,
    sourceApis.length,
    "A component is missing from the API reference"
  );
  for (const actual of sourceApis) {
    const reference = documentedApis.find((api) => api.name === actual.name);
    assert(reference, `Missing API reference for ${actual.name}`);
    assert.equal(reference.selector, actual.selector);
    assert.deepEqual(
      reference.inputs.map((input) => input.name),
      actual.inputs,
      `Stale inputs for ${actual.name}`
    );
    assert.deepEqual(
      reference.outputs.map((output) => output.name),
      actual.outputs,
      `Stale outputs for ${actual.name}`
    );
    for (const member of reference.inputs) {
      assert.equal(
        member.type,
        actual.memberTypes["Input." + member.name],
        `Stale type/options for ${actual.name}.${member.name}`
      );
    }
    for (const member of reference.outputs) {
      assert.equal(
        member.type,
        actual.memberTypes["Output." + member.name],
        `Stale event type for ${actual.name}.${member.name}`
      );
    }
  }

  fs.mkdirSync(path.join(workspace, "tmp"), { recursive: true });
  const fixtures = fs.mkdtempSync(
    path.join(workspace, "tmp/showcase-example-check-")
  );
  let exampleCount = 0;
  const coveredApis = new Set();

  for (const [key, doc] of Object.entries(documentation)) {
    const coverage = new Map();
    let allCode = "";
    for (const [index, example] of doc.examples.entries()) {
      const parsed = parseTemplate(example.template, `${key}-${index}.html`);
      assert(
        !parsed.errors?.length,
        `${key}/${example.title}: ${parsed.errors
          ?.map((error) => error.toString())
          .join("\n")}`
      );
      function visit(nodes) {
        for (const node of nodes) {
          if (node.name?.startsWith("mytag-")) {
            if (!coverage.has(node.name)) {
              coverage.set(node.name, {
                inputs: new Set(),
                outputs: new Set(),
              });
            }
            const seen = coverage.get(node.name);
            for (const input of [
              ...(node.attributes || []),
              ...(node.inputs || []),
            ]) {
              seen.inputs.add(input.name);
            }
            for (const output of node.outputs || []) {
              seen.outputs.add(output.name);
            }
          }
          if (node.children) {
            visit(node.children);
          }
        }
      }
      visit(parsed.nodes);
      allCode += "\n" + example.template + "\n" + example.typescript;
      assert(
        !/\?{3,}|\uFFFD/.test(example.template + example.typescript),
        `${key}: corrupted text`
      );
      const directory = path.join(fixtures, `${key}-${index}`);
      fs.mkdirSync(directory);
      fs.writeFileSync(
        path.join(directory, "example.component.html"),
        example.template
      );
      fs.writeFileSync(
        path.join(directory, "example.component.ts"),
        example.typescript
      );
      fs.writeFileSync(
        path.join(directory, "example.module.ts"),
        example.module || doc.module
      );
      exampleCount++;
    }
    for (const name of doc.apiNames) {
      coveredApis.add(name);
      const api = documentedApis.find((item) => item.name === name);
      assert(api, `Unknown documented API: ${name}`);
      const seen = coverage.get(api.selector);
      assert(seen, `${key}: no example renders ${api.selector}`);
      for (const input of api.inputs) {
        assert(
          seen.inputs.has(input.name),
          `${key}: no example binds ${api.selector}.${input.name}`
        );
        const alternatives = [...input.type.matchAll(/'([^']+)'/g)].map(
          (match) => match[1]
        );
        for (const alternative of alternatives) {
          assert(
            allCode.includes(`"${alternative}"`) ||
              allCode.includes(`'${alternative}'`),
            `${key}: missing ${input.name} option ${alternative}`
          );
        }
      }
      for (const output of api.outputs) {
        assert(
          seen.outputs.has(output.name),
          `${key}: no example binds ${api.selector}.${output.name}`
        );
      }
    }
  }
  assert.equal(
    coveredApis.size,
    sourceApis.length,
    "Not every public component has examples"
  );
  console.log(
    `Covered ${sourceApis.length} components, ${sourceApis.reduce(
      (n, api) => n + api.inputs.length,
      0
    )} inputs and ${sourceApis.reduce(
      (n, api) => n + api.outputs.length,
      0
    )} outputs in ${exampleCount} examples.`
  );
  fs.writeFileSync(
    path.join(fixtures, "tsconfig.json"),
    JSON.stringify(
      {
        extends: path.join(workspace, "tsconfig.json"),
        compilerOptions: { noEmit: true, types: [], rootDir: workspace },
        include: ["./**/*.ts"],
      },
      null,
      2
    )
  );
  const compilerPackage = require.resolve("@angular/compiler-cli/package.json");
  const compiler = path.resolve(
    path.dirname(compilerPackage),
    require(compilerPackage).bin.ngc
  );
  const result = spawnSync(
    process.execPath,
    [compiler, "-p", path.join(fixtures, "tsconfig.json")],
    { cwd: workspace, stdio: "inherit", windowsHide: true }
  );
  if (result.error) {
    throw result.error;
  }
  assert.equal(
    result.status,
    0,
    "The copyable examples did not pass Angular strict template/type checking"
  );
  console.log(
    `All ${exampleCount} copyable examples pass Angular strict template/type checking.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
