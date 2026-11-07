# Design-system library guide

## Scope

Everything under this directory ships as the `@iho/design-system` package. Favor
consumer stability over local convenience.

## Public API and packaging

- Add supported exports to `src/public-api.ts`; consumers should import from
  `@iho/design-system`, never internal source paths.
- Keep Angular peer dependency compatibility with the workspace's Angular 16.2
  baseline.
- If adding a packaged stylesheet, font, image, or other asset, ensure
  `ng-package.json` includes it and that consumer paths work from the built
  package.
- Do not hand-edit package versions during ordinary feature work. Versioning and
  publishing are release operations.
- Avoid breaking selectors, input/output names, union values, service contracts,
  CSS classes, or Sass/icon names. If a breaking change is explicitly requested,
  update the demo and document the migration.

## Angular conventions

- Follow the existing NgModule-based organization unless extending an explicitly
  standalone feature such as Notification.
- Keep templates and styles external for normal visual components.
- Use typed inputs and outputs. Prefer `unknown` or a specific interface over new
  uses of `any`.
- For form controls, implement the complete `ControlValueAccessor` contract:
  `writeValue`, change/touched callbacks, and disabled-state propagation.
- Avoid browser-global access during construction when a service or component
  may be consumed in SSR contexts.
- Preserve strict template type checking and clean up subscriptions, timers,
  listeners, and overlays in the appropriate lifecycle hook.

## Component work

For a new component:

1. Create the component files in `src/lib/components/<name>/`.
2. Declare/export it from its local module, or explicitly choose standalone
   architecture when required.
3. Export the consumer-facing symbols from `src/public-api.ts`.
4. Add or update a focused spec for behavior with meaningful branching.
5. Add a usage page in `projects/admin-panel` and wire its route/navigation.
6. Build the library before validating the showcase.

Use existing tokens and states before inventing new values. Include accessible
labels/roles, focus visibility, keyboard behavior, and disabled/error states as
appropriate.

## Validation

```bash
npx ng build design-system
npx ng test design-system --watch=false --browsers=ChromeHeadless
```

When public API, templates, styles, or packaged assets change, also build the
admin panel after the library build.
