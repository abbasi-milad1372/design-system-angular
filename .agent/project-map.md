# Project map

## Architecture

```text
tailwind.config.js + library assets
              |
              v
projects/design-system  --ng-packagr-->  dist/design-system
                                              |
                                              v
                                  projects/admin-panel

tagged GitLab pipeline --> devops/ci/Dockerfile --> published container
```

The workspace has two Angular projects:

- `design-system`: Angular library packaged by ng-packagr. Its entry point is
  `projects/design-system/src/public-api.ts`. Package assets are declared in
  `ng-package.json`.
- `admin-panel`: browser application that serves as the component catalogue and
  integration harness. Routes are currently declared in
  `src/app/app.module.ts`, and navigation is maintained separately in
  `src/app/admin-layout.component.ts`.

## Design-system shape

Each component normally lives under
`projects/design-system/src/lib/components/<name>/` and contains:

- a component TypeScript file;
- an external HTML template and SCSS file;
- an NgModule that declares and exports the component.

Exceptions exist and must be preserved intentionally. Notification uses a
standalone component and service; radio and dropdown each contain cooperating
child components; bottomsheet also exposes a service.

Public consumers import from `@iho/design-system`. Every supported component, module,
service, model, or type must be reachable from `src/public-api.ts`. The root
`DesignSystemModule` is not currently an umbrella export for every component, so
do not assume importing it makes all component modules available.

## Styling and assets

- Shared Sass entry points and design tokens live in
  `projects/design-system/src/lib/assets/styles`.
- Tailwind scans both Angular projects. Its custom colors, spacing, typography,
  radii, shadows, and breakpoints are design tokens, not arbitrary utilities.
- Fonts, icons, and images are copied into the package by `ng-package.json`.
- The admin panel has duplicate assets for its own runtime. Avoid updating only
  one copy when the same shipped asset is expected in both places.
- The product is RTL-first. `projects/admin-panel/src/styles.scss` sets global
  RTL direction while code blocks are LTR.

## Build and dependency flow

The root TypeScript path maps `@iho/design-system` to `dist/design-system`. The admin
build reads packaged styles and assets from that same output. `build.sh` builds
the library before serving the app. Therefore:

1. build the library first;
2. use the built package boundary when validating consumer behavior;
3. never patch `dist` or `node_modules` as the source of a fix.

The root package scripts contain legacy commands. In particular, `prestart`
points to a missing `tools/generate-env.ts`. Prefer explicit Angular CLI project
commands documented in the root `AGENTS.md`.

## Known review hotspots

- `public-api.ts`, per-component modules, and demo imports can drift apart.
- Adding a demo requires both a child route and a navigation entry.
- Form controls use `ControlValueAccessor`; verify value, touched, disabled, and
  change propagation behavior.
- Public naming is historically inconsistent (`IHO`, `Iho`, and lower-case class
  names). Preserve compatibility unless a breaking migration is requested.
- Only the generated library component currently has a unit test. New behavioral
  work should add focused tests when practical; do not claim broad coverage.
- CI publishes only version-like Git tags. Registry and deployment settings are
  operationally sensitive.
