# General-purpose component migration

Version v0.3.0 is a breaking API update from v0.2.1. Update application templates and
custom CSS before upgrading. No deprecated aliases are retained for the previous
domain-specific names. Unrelated inputs, outputs, and Sass tokens
retain their existing names.

## Package name in v0.5.0

The package is now `@mytag/design-system`. Replace the previous package dependency
with the new package, update all TypeScript imports, and update configured Sass,
icon, and font paths under `node_modules/@mytag/design-system`.
The previous package name is not provided as an alias. Existing TypeScript
module/class exports, component selectors, CSS classes, and token values remain
unchanged by this package rename. Installation from the GitHub Release archive is
documented in the root README.

## Component tag prefix

All library component selectors now use `mytag-`. Replace the previous `iho-`
prefix in application opening/closing tags, component host queries, and custom
CSS type selectors. The previously generated library root tag is now
`mytag-design-system`. Existing suffixes remain the same, including
`mytag-footer-ds`, `mytag-radio-group`, and `mytag-notifications`.

```html
<mytag-button><span label>ثبت درخواست</span></mytag-button>
<mytag-input label="نام کاربری"></mytag-input>
```

The Angular CLI library prefix is `mytag`, so new library components follow the
same naming convention. The v0.3.0 tag migration preserves TypeScript class/module
exports, icon classes, and component CSS classes. For v0.5.0 use the package name
`@mytag/design-system`. Old component selectors are not aliases.

## Cards

Import `CardType` and `IHOCardModule` from `@mytag/design-system`.

| Purpose | New API |
| --- | --- |
| Default vertical item layout | `type="standard"` |
| Category summary layout | `type="category"` |
| Horizontal item layout | `type="horizontal"` |
| Unit shown after the price | `priceUnit` |
| Action destination | `actionLink` |
| Action text | `actionLabel` (default: مشاهده جزئیات) |
| Unavailable state | `unavailable` |
| Unavailable text | `unavailableLabel` (default: ناموجود) |
| Featured marker | `featured`, `featuredLabel` (default: ویژه) |
| Information badge caption | `badgeLabel` (default: اطلاعات) |
| Image fallback | `fallbackImage` (default: inline SVG, with no network request) |
| Layout getters | `isStandard`, `isCategory` |

Replace the previous domain-specific inputs with the corresponding inputs above.
The `clickBtnCard` output carries an `Event`. Unavailable actions are disabled and
do not emit it. `actionLink` renders the available action as a link when supplied.

Update projected content to use `[metadata]`, `[quantity]`, `[price-unit]`,
`[card-badges]`, and `[card-badges-mobile]`. Existing advertisement and custom
currency/promotion template slots retain their names.

```html
<mytag-card type="horizontal" title="مجموعه ابزارهای طراحی"
  [price]="5400000" priceUnit="بسته" [withPrice]="true"
  actionLabel="مشاهده جزئیات" actionLink="/items/1"
  badgeLabel="دسترسی" labelBadge="آنلاین" [featured]="true">
  <span card-badges>جدید</span>
</mytag-card>

<mytag-card type="category" title="منابع آموزشی">
  <span metadata>۲۶ مورد</span>
</mytag-card>
```

Custom styles must use `.card_standard`, `.card_horizontal`, `.card__featured`,
`.card__promotions`, `.card__price-unit`, and `.card-location__icon` instead of
the old domain-specific selectors. The horizontal layout's related selectors
now begin with `horizontal`.

## Navigation and footer

Both components default to the Persian brand label «سامانه طراحی». They do not
include an application-specific logo, address, phone number, remote CDN, or
service links. Supply content through inputs:

- Navbar: `brandName`, `logoUrl`, `homeUrl`, `menuLabel`, `menuItems`, `links`,
  `utilityLinks`, and `accountLabel`. Link arrays use exported `NavigationLink`
  objects with `label`, `href`, and optional `icon`.
- Footer: `brandName`, `logoUrl`, `homeUrl`, `phoneNumber`, `features`, `sections`,
  `contacts`, `socialLinks`, and `copyright`. The exported `FooterFeature`,
  `FooterSection`, and `FooterContact` types describe each list.

The footer's `showLinks` input reveals projected `[links]` content. Project any
consumer-owned certification artwork through `[certificates]`. Its previous
unused CDN getter has been removed; section expansion is indexed by the supplied
section list rather than fixed section keys.

The navbar disclosure supports native button activation, Tab navigation, Escape
to close and return focus, and outside-click dismissal. Footer sections support
native button activation on mobile and remain expanded on desktop.

## Icons

Use `iho-icon-building-landmark` and `iho-icon-building-front` for the two renamed
building glyphs. Their Unicode mappings and artwork are unchanged. The icon
catalogue and SVG font metadata use the new names in both source asset trees.
