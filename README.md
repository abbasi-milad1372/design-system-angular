# Design System Angular

A reusable Angular 16 Design System library for building consistent, scalable and maintainable UI components.

This package includes common UI components such as Button, Badge, Card, Input, Checkbox, Radio, Switch, Tabs, Navbar, Breadcrumb, Dropdown, Tooltip, Notification, BottomSheet and Accordion.

## Features

* Angular 16 compatible
* Modular component architecture
* Reusable UI components
* SCSS-based styling
* Custom fonts and assets support
* Ready for internal design system usage
* Built with `ng-packagr`
* Suitable for enterprise Angular applications

## Tech Stack

* Angular `16.2.x`
* Angular Material `16.2.x`
* Angular CDK
* RxJS `7.8.x`
* TypeScript `5.1.x`
* SCSS
* ng-packagr

## Installation

```bash
npm install @iho/front
```

If you are using a private registry, make sure your `.npmrc` is configured correctly.

Example:

```bash
@iho:registry=http://gitlab.iho.co/api/v4/projects/1/packages/npm/
```

## Usage

Import the required module in your Angular module:

```ts
import { ButtonModule } from '@iho/front';

@NgModule({
  imports: [
    ButtonModule
  ]
})
export class AppModule {}
```

Then use the component in your template:

```html
<iho-button>
  Submit
</iho-button>
```

## Available Components

### Button

Reusable button component.

```ts
import { ButtonModule } from '@iho/front';
```

### Badge

Used for status labels, counters and small indicators.

```ts
import { BadgeModule } from '@iho/front';
```

### Card

Reusable card layout component.

```ts
import { CardModule } from '@iho/front';
```

### Input

Custom input component for forms.

```ts
import { InputModule } from '@iho/front';
```

### Checkbox

Reusable checkbox component.

```ts
import { CheckboxModule } from '@iho/front';
```

### Radio

Radio button and radio group components.

```ts
import { RadioModule } from '@iho/front';
```

### Switch

Toggle switch component.

```ts
import { SwitchModule } from '@iho/front';
```

### Tab

Tab component for switching between content sections.

```ts
import { TabModule } from '@iho/front';
```

### Navbar

Navigation bar component.

```ts
import { NavbarModule } from '@iho/front';
```

### Breadcrumb

Breadcrumb navigation component.

```ts
import { BreadcrumbModule } from '@iho/front';
```

### Dropdown / Select

Custom select and option components.

```ts
import { SelectModule } from '@iho/front';
```

### Tooltip

Tooltip component for additional helper text.

```ts
import { TooltipModule } from '@iho/front';
```

### BottomSheet

Bottom sheet component and service.

```ts
import { BottomsheetModule, BottomSheetService } from '@iho/front';
```

### Accordion

Expandable accordion component.

```ts
import { AccordionModule } from '@iho/front';
```

### Notification

Notification component, model and service.

```ts
import { NotificationService } from '@iho/front';
```

## Styles and Assets

This library includes shared styles, fonts and image assets.

Assets are packaged from:

```txt
src/lib/assets/styles
src/lib/assets/fonts
src/lib/assets/img
```

To use global styles, add them to your Angular project styles configuration if needed:

```json
"styles": [
  "src/styles.scss",
  "node_modules/@iho/front/assets/styles/styles.scss",
  "node_modules/@iho/front/assets/styles/icons.scss"
]
```

If your build output differs, check the final package structure inside `node_modules/@iho/front`.

## Development

Clone the repository:

```bash
git clone https://github.com/abbasi-milad1372/design-system-angular.git
cd design-system-angular
```

Install dependencies:

```bash
npm install
```

Run the demo/admin project:

```bash
npm start
```

Build the library:

```bash
npm run build
```

The build output will be generated inside:

```txt
dist/design-system
```

## Project Structure

```txt
projects/
  design-system/
    src/
      lib/
        components/
          accordion/
          badge/
          bottomsheet/
          breadcrumb/
          button/
          card/
          checkbox/
          dropdown/
          footer/
          input/
          navbar/
          notification/
          radio/
          switch/
          tab/
          tooltip/
        assets/
          styles/
          fonts/
          img/
      public-api.ts

  admin-panel/
    src/
```

## Public API

All public components and modules are exported from:

```txt
projects/design-system/src/public-api.ts
```

Example exports:

```ts
export * from './lib/components/button/button.component';
export * from './lib/components/button/button.module';

export * from './lib/components/accordion/accordion.component';
export * from './lib/components/accordion/accordion.module';
```

## Build

```bash
ng build design-system
```

or:

```bash
npm run build
```

## Testing

```bash
npm test
```

## Publishing

Build the library first:

```bash
npm run build
```

Then go to the build output folder:

```bash
cd dist/design-system
```

Publish package:

```bash
npm publish
```

For private registry publishing, make sure the registry and authentication token are configured in `.npmrc`.

## Recommended Usage Pattern

Import only the modules you need:

```ts
import { ButtonModule, InputModule, CardModule } from '@iho/front';

@NgModule({
  imports: [
    ButtonModule,
    InputModule,
    CardModule
  ]
})
export class SharedModule {}
```

Then import your `SharedModule` inside feature modules.

## Browser Support

This library supports modern browsers compatible with Angular 16.

## License

MIT

## Author

Developed by Milad Abbasi.

GitHub: [abbasi-milad1372](https://github.com/abbasi-milad1372)
