# Admin-panel showcase guide

## Purpose

This application is the RTL catalogue and integration consumer for
`design-system`. It should demonstrate public package usage and component states;
reusable UI logic belongs in the library.

## Imports and dependency flow

- Import library APIs from `design-system`. Existing direct imports from
  `projects/design-system/src/...` are legacy debt; do not add more. If a symbol
  is missing, export it through the library public API.
- Build `design-system` before building or serving this project because the
  workspace path points to `dist/design-system`.
- Never fix a consumer error by editing `dist/design-system` or
  `node_modules/design-system`.

## Application structure

- Routes are declared in `src/app/app.module.ts`.
- Sidebar/navigation entries are declared in
  `src/app/admin-layout.component.ts`.
- A new showcase page must be added to declarations, routes, and navigation.
  Keep the route slug and navigation path identical.
- Put component examples in `src/app/views/<component>/`; keep the shell in
  `src/app`.

## Demo quality

- Demonstrate the public API a consumer should copy: common variants, disabled
  state, errors, loading/empty states, emitted events, and forms integration as
  relevant.
- Keep displayed snippets synchronized with the rendered example.
- Preserve global RTL and Ravi FaNum behavior; code snippets remain LTR.
- Avoid artificial constructor side effects or long-running notifications unless
  the page explicitly demonstrates that behavior.
- Use real accessible labels and meaningful Persian copy where a demo needs text.

## Validation

```bash
npx ng build design-system
npx ng build admin-panel --configuration development
```

Run the relevant admin-panel tests when present. For visual changes, manually
check the affected route at narrow and wide viewports and in RTL.
