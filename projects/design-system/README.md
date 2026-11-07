# MyTag Design System

An Angular 16.2 component library with RTL layouts, Persian default labels,
Ravi FaNum typography, and shared design tokens.

## Package and component names

The package import is `@mytag/design-system`. All 20 public component tags use the
`mytag-` prefix, including `mytag-button`, `mytag-input`, `mytag-card`,
`mytag-select`, `mytag-option`, `mytag-footer-ds`, and `mytag-notifications`.
Branded TypeScript modules, components, and form-control types use the `Mytag`
prefix, including `MytagButtonModule`, `MytagCheckboxComponent`, and
`MytagCheckboxSize`. Update imports and type references to these names.
Version v0.6.0 includes these 24 TypeScript export renames. Update named imports
and type references when upgrading; previous branded names are not aliases.

Version v0.5.0 moves the package to the `@mytag` scope. Update dependencies,
imports, and configured `node_modules` asset paths to `@mytag/design-system`.
Component selectors and design tokens are unchanged by this package rename.

```typescript
import { MytagButtonModule, MytagCardModule } from '@mytag/design-system';
```

Add the modules to your consuming NgModule, then use their tags:

```html
<mytag-button><span label>ثبت درخواست</span></mytag-button>
<mytag-card type="standard" title="مجموعه ابزارهای طراحی"
  [price]="5400000" priceUnit="بسته" [withPrice]="true"></mytag-card>
```

Cards use `standard`, `category`, and `horizontal` layouts. General-purpose
inputs include `priceUnit`, `actionLink`, `actionLabel`, `unavailable`,
`unavailableLabel`, `featured`, `featuredLabel`, `badgeLabel`, and `fallbackImage`.
Navbar and footer receive branding, navigation lists, and contact content from
the consuming application. Exported content types are `NavigationLink`,
`FooterFeature`, `FooterSection`, and `FooterContact`; card layouts use `CardType`.

The renamed building glyph classes are `iho-icon-building-landmark` and
`iho-icon-building-front`. Icon CSS classes retain the `iho-icon-` prefix.

Version v0.3.0 includes breaking changes from v0.2.1. The complete component-tag/import
table, projection slots, CSS names, and examples are in the
[repository README](https://github.com/abbasi-milad1372/design-system-angular/blob/v0.6.0/README.md). Read the
[migration guide](https://github.com/abbasi-milad1372/design-system-angular/blob/v0.6.0/docs/generic-components-migration.md) before upgrading.

Version v0.5.0 retains that component API and adds the redesigned showcase,
complete copyable examples, searchable icon catalogue, and color-token explorer.

## Code scaffolding

Run `ng generate component component-name --project design-system` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project design-system`.
> Note: Don't forget to add `--project design-system` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build design-system` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build design-system`, go to the dist folder `cd dist/design-system` and run `npm publish`.

## Running unit tests

Run `ng test design-system` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
