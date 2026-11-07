# Component implementation guide

## Folder contract

- Keep one component family per folder. Co-locate its component, template,
  stylesheet, module, related model, and narrowly coupled service.
- Selectors use the `mytag-` prefix. Do not introduce `lib-` or `app-` selectors
  for public components.
- A normal component module imports only what its template needs, declares the
  component, and exports it. Consumers must not need undeclared transitive
  dependencies.
- Add public symbols to the library `src/public-api.ts`; do not deep-import
  another component through the application tree.

## API behavior

- Treat existing inputs, outputs, defaults, and emitted timing as stable API.
- Use string unions or exported types for closed variants and sizes.
- Avoid new `EventEmitter<any>` or untyped data inputs. Define the smallest useful
  public model.
- Do not emit a second semantic event for a single user action unless documented.
- Keep visual state derived from inputs deterministic. Avoid mutating an input
  object or array owned by a consumer.
- Form components must work with both template-driven and reactive forms and
  propagate disabled/touched state correctly.

## Templates and styles

- Use semantic HTML and native controls where possible. Keyboard operation,
  focus indication, accessible naming, and ARIA state must match visual state.
- Preserve RTL behavior; use logical layout properties where practical and test
  icons/arrows that imply direction.
- Reuse Tailwind/Sass design tokens. Do not hard-code a near-duplicate color,
  spacing, radius, shadow, or font value when a token exists.
- Keep component styles encapsulated. Shared tokens and globally consumed icon or
  font rules belong under `../assets/styles`, not in a component stylesheet.
- Resolve assets as package-consumer assets, not repository-only relative paths.

## Verification

Build the library for every component change. Add focused tests for interaction,
events, CVA behavior, lifecycle cleanup, and nontrivial state changes. Update the
matching admin-panel view whenever the public usage or rendered states change.
