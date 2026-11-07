# Repository agent guide

## Start here

- This is an Angular 16 workspace containing a publishable component library and
  a showcase application.
- Read `.agent/project-map.md` before making broad or cross-project changes.
  `.agent/README.md` explains how the agent documentation is organized.
- More specific `AGENTS.md` files override this file for their directory tree:
  - `projects/design-system/AGENTS.md`
  - `projects/design-system/src/lib/components/AGENTS.md`
  - `projects/design-system/src/lib/assets/AGENTS.md`
  - `projects/admin-panel/AGENTS.md`
  - `projects/admin-panel/src/app/views/AGENTS.md`
  - `devops/AGENTS.md`

## Workspace boundaries

- `projects/design-system` is the distributable `@iho/design-system` package. Treat
  its public inputs, outputs, selectors, exported types, Sass assets, and icon
  names as consumer-facing API.
- `projects/admin-panel` is the RTL showcase and manual integration application.
  It demonstrates the library; reusable behavior belongs in the library.
- `devops` and `.gitlab-ci.yml` build and publish tagged releases. Do not change
  registry, certificate, deployment, or release behavior as part of UI work.
- Generated or installed directories (`dist`, `node_modules`, `.angular`) are
  not source and must not be edited.

## Working rules

- Keep changes scoped. Do not reformat unrelated legacy code or silently rename
  existing public APIs to normalize inconsistent historical naming.
- Preserve Angular strict-mode compatibility (`strictTemplates`,
  `strictInjectionParameters`, and strict TypeScript options are enabled).
- Prefer repository-local patterns and Angular 16-compatible APIs. Do not
  introduce a framework upgrade, standalone migration, or new dependency unless
  the task explicitly requires it.
- Preserve RTL behavior and the Ravi FaNum typography. Check both RTL layout and
  any explicitly LTR content such as code examples.
- Never add secrets, npm tokens, internal credentials, or generated `.npmrc`
  files to the repository.

## Validation

Use the smallest checks that cover the change, then expand for cross-project
work:

```bash
npx ng build design-system
npx ng build admin-panel --configuration development
npx ng test design-system --watch=false --browsers=ChromeHeadless
```

The admin panel resolves `@iho/design-system` through `dist/design-system`, so build
the library before building the application. The root `prestart` currently
references the absent `tools/generate-env.ts`; do not rely on `npm start` until
that separate repository issue is fixed. Report any pre-existing validation
failure instead of weakening checks or editing generated output.

## Completion checklist

- Build/test the directly affected project where the environment permits.
- For library API changes, update `projects/design-system/src/public-api.ts`.
- For a new or changed component, update its admin-panel example when user-facing
  behavior or usage changed.
- Include accessibility states, disabled/error behavior, keyboard interaction,
  and RTL layout in the review when relevant.
- Summarize validation performed and clearly identify pre-existing failures.
