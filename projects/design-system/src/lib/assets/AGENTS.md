# Design assets guide

## Tokens and shared styles

- `_tokens.scss`, `styles.scss`, `icons.scss`, and `tailwind.config.js` together
  form a consumer-facing design-token surface.
- Reuse existing semantic scales. Add a token only when it represents a reusable
  system decision, not a one-off component adjustment.
- A token rename or removal is a breaking change. Search both projects and
  consider external consumers before changing it.
- Keep global styles narrowly scoped; avoid element resets that unexpectedly
  alter consumer applications.

## Fonts, icons, and images

- Preserve the Ravi FaNum family names and declared weights.
- Treat icon font class names and glyph mappings as stable API.
- Optimize new raster assets and prefer SVG for scalable artwork when suitable.
- Do not embed secrets, environment-specific URLs, or local absolute paths.
- If an asset is needed by the showcase as well as the package, verify both the
  ng-packagr asset copy and the admin-panel runtime copy/reference.

## Verification

Build the library and inspect the resulting `dist/design-system` asset layout
without editing it. Then build the admin panel to catch missing runtime paths and
Sass resolution failures.
