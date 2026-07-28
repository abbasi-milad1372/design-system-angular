# Design System Angular

<p align="center">
  <img src="./docs/preview.png" alt="Design System Angular showcase preview">
</p>

<p align="center">
  A reusable, token-based Angular design system built for enterprise applications.
</p>

<p align="center">
  Angular 16 · TypeScript · SCSS · Angular Material · Responsive · RTL-first
</p>

## Overview

This workspace contains:

- `design-system`: the publishable component library.
- `admin-panel`: an RTL showcase and integration application for the library.

The latest component styles use shared design tokens for color, typography,
spacing, border radius, border width, and elevation. The showcase includes
updated examples for the supported component states and variants.

## Features

- Modular Angular components and per-component NgModules
- Shared CSS custom-property design tokens
- SCSS styling and packaged Ravi FaNum typography
- RTL-first layouts
- Responsive component behavior
- Form controls with Angular Forms integration
- Packaged icons, fonts, images, and Sass assets
- Interactive showcase with usage examples
- Strict TypeScript and Angular template checking

## Requirements

- Node.js and npm
- Angular 16.2-compatible application

## Installation

```bash
npm install @iho/front
```

## Usage

Import only the modules required by your application:

```typescript
import { NgModule } from '@angular/core';
import { IHOButtonModule } from '@iho/front';

@NgModule({
  imports: [IHOButtonModule],
})
export class AppModule {}
```

Then use the component in a template:

```html
<iho-button>Submit</iho-button>
```

All supported consumer APIs are exported from
`projects/design-system/src/public-api.ts`.

## Available components

| Category | Components |
| --- | --- |
| Actions | Button |
| Forms | Input, Checkbox, Radio and Radio Group, Switch, Select, Chips |
| Data display | Badge, Card, Tooltip |
| Navigation | Navbar, Breadcrumb, Tabs |
| Feedback | Notification, Bottom Sheet |
| Layout | Accordion, Footer |

The showcase also includes an icon catalogue.

## Design tokens and assets

The library ships reusable assets from
`projects/design-system/src/lib/assets`:

- color palettes and transparency scales
- spacing and responsive size scales
- Ravi FaNum typography tokens and font files
- border radius and border width tokens
- shadow tokens
- icon styles and image assets

The main Sass entry point is:

```text
projects/design-system/src/lib/assets/styles/styles.scss
```

Packaged applications can consume the stylesheet through the library's
`./styles` Sass export.

## Workspace structure

```text
projects/
├── design-system/
│   ├── ng-package.json
│   └── src/
│       ├── lib/
│       │   ├── assets/
│       │   │   ├── fonts/
│       │   │   ├── img/
│       │   │   └── styles/
│       │   └── components/
│       │       ├── accordion/
│       │       ├── badge/
│       │       ├── bottomsheet/
│       │       ├── breadcrumb/
│       │       ├── button/
│       │       ├── card/
│       │       ├── checkbox/
│       │       ├── chips/
│       │       ├── dropdown/
│       │       ├── footer/
│       │       ├── input/
│       │       ├── navbar/
│       │       ├── notification/
│       │       ├── radio/
│       │       ├── switch/
│       │       ├── tab/
│       │       └── tooltip/
│       └── public-api.ts
└── admin-panel/
    └── src/app/views/
```

The library is built with `ng-packagr` into `dist/design-system`. The admin
panel consumes that built package boundary, so the library must be built first.

## Local development

Install dependencies:

```bash
npm install
```

Build the component library:

```bash
npx ng build design-system
```

Run the showcase application:

```bash
npx ng serve admin-panel
```

Then open `http://localhost:4200/`.

> The root `npm start` command currently references the absent
> `tools/generate-env.ts`; use the explicit Angular CLI commands above.

## Validation

Build the library:

```bash
npx ng build design-system
```

Build the showcase after the library:

```bash
npx ng build admin-panel --configuration development
```

Run the library tests:

```bash
npx ng test design-system --watch=false --browsers=ChromeHeadless
```

## Tech stack

- Angular 16.2
- Angular Material and Angular CDK
- TypeScript 5.1
- RxJS 7.8
- SCSS
- Tailwind CSS 3
- ng-packagr

## Contributing

Keep reusable behavior in `projects/design-system` and use `admin-panel` for
consumer-facing examples. New public components must be exported from
`projects/design-system/src/public-api.ts` and demonstrated in the showcase.

Before submitting a change, build the directly affected project and preserve
RTL behavior, keyboard interaction, accessibility states, and strict-mode
compatibility.

## Author

**Milad Abbasi**

Frontend Engineer and Angular Developer

[GitHub](https://github.com/abbasi-milad1372)

## License

MIT
