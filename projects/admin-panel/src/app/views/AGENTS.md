# Showcase view guide

- Keep each view focused on one design-system component family.
- Import examples from the package entry point (`@iho/design-system`), not library
  source files.
- Show enough states to reveal the public contract without turning the demo into
  production business logic.
- Keep live state in the view component and markup examples in its template.
  Avoid service calls, credentials, backend coupling, or environment-specific
  data.
- When adding a view, also update the declarations and child routes in
  `app.module.ts` plus the navigation list in `admin-layout.component.ts`.
- Preserve RTL layout, while rendering code samples with LTR direction.
- Verify that example inputs compile under strict templates and that output
  handlers and form bindings demonstrate the intended consumer usage.
