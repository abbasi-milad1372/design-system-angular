import { ComponentApi } from './documentation.model';

// Synchronized with the library's public @Input/@Output declarations.
export const COMPONENT_APIS: readonly ComponentApi[] = [
  {
    name: 'TooltipComponent',
    selector: 'mytag-tooltip',
    inputs: [
      {
        name: 'classList',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'isVisible',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'popUpTemplate',
        type: 'TemplateRef<any>',
        defaultValue: 'undefined',
      },
      {
        name: 'position',
        type: "'top' | 'bottom' | 'left' | 'right'",
        defaultValue: "'bottom'",
      },
      {
        name: 'forcePosition',
        type: 'boolean',
        defaultValue: 'false',
        note: 'این ورودی تعریف شده، اما در محاسبهٔ موقعیت فعلی استفاده نمی‌شود.',
      },
      {
        name: 'offset',
        type: 'number | { top?: number; bottom?: number; left?: number; right?: number }',
        defaultValue: '8',
      },
      {
        name: 'showArrow',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        name: 'delayEnter',
        type: 'number',
        defaultValue: '75',
      },
      {
        name: 'delayLeave',
        type: 'number',
        defaultValue: '150',
      },
      {
        name: 'anchor',
        type: 'ElementRef<HTMLElement> | HTMLElement | null',
        defaultValue: 'undefined',
      },
    ],
    outputs: [
      {
        name: 'closed',
        type: 'void',
      },
      {
        name: 'visibleChange',
        type: 'boolean',
      },
    ],
  },
  {
    name: 'TabComponent',
    selector: 'mytag-tab',
    inputs: [
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'size',
        type: "'sm' | 'md'",
        defaultValue: "'md'",
      },
      {
        name: 'variant',
        type: "'outline'",
        defaultValue: "'outline'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'active',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'layout',
        type: "'default' | 'icon-top'",
        defaultValue: "'default'",
      },
      {
        name: 'border',
        type: 'true | false',
        defaultValue: 'false',
      },
      {
        name: 'roundedFull',
        type: 'true | false',
        defaultValue: 'false',
      },
    ],
    outputs: [],
  },
  {
    name: 'IhoSwitchComponent',
    selector: 'mytag-switch',
    inputs: [
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'required',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: 'undefined',
      },
      {
        name: 'id',
        type: 'string',
        defaultValue: 'شناسه خودکار',
      },
    ],
    outputs: [
      {
        name: 'changed',
        type: 'boolean',
      },
    ],
  },
  {
    name: 'RadioComponent',
    selector: 'mytag-radio',
    inputs: [
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'radioValue',
        type: 'any',
        defaultValue: 'undefined',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'checked',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'dir',
        type: 'string',
        defaultValue: "'rtl'",
      },
    ],
    outputs: [],
  },
  {
    name: 'IhoRadioGroupComponent',
    selector: 'mytag-radio-group',
    inputs: [
      {
        name: 'name',
        type: 'string',
        defaultValue: 'شناسه خودکار',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [],
  },
  {
    name: 'NotificationComponent',
    selector: 'mytag-notifications',
    inputs: [],
    outputs: [],
  },
  {
    name: 'NavbarComponent',
    selector: 'mytag-navbar',
    inputs: [
      {
        name: 'logoUrl',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'brandName',
        type: 'string',
        defaultValue: "'سامانه طراحی'",
      },
      {
        name: 'homeUrl',
        type: 'string',
        defaultValue: "'/'",
      },
      {
        name: 'menuLabel',
        type: 'string',
        defaultValue: "'فهرست'",
      },
      {
        name: 'menuItems',
        type: 'readonly NavigationLink[]',
        defaultValue: '[]',
      },
      {
        name: 'links',
        type: 'readonly NavigationLink[]',
        defaultValue: '[]',
      },
      {
        name: 'utilityLinks',
        type: 'readonly NavigationLink[]',
        defaultValue: '[]',
      },
      {
        name: 'accountLabel',
        type: 'string',
        defaultValue: "'ورود یا ثبت نام'",
      },
    ],
    outputs: [
      {
        name: 'onToggleSideNav',
        type: 'void',
      },
      {
        name: 'openDialogModal',
        type: 'void',
      },
    ],
  },
  {
    name: 'InputComponent',
    selector: 'mytag-input',
    inputs: [
      {
        name: 'type',
        type: "'text' | 'password' | 'email' | 'number' | 'tel' | 'url'",
        defaultValue: "'text'",
      },
      {
        name: 'size',
        type: "'md' | 'lg'",
        defaultValue: "'md'",
      },
      {
        name: 'template',
        type: "'floating' | 'inline'",
        defaultValue: "'floating'",
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'errorFloating',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'errorInline',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'successInline',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'hint',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'readonly',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'rounded',
        type: "'left' | 'right' | 'none'",
        defaultValue: "'none'",
      },
      {
        name: 'icon',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'iconClass',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'required',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'border',
        type: 'boolean',
        defaultValue: 'true',
        note: 'این ورودی تعریف شده، اما قالب فعلی ورودی از آن استفاده نمی‌کند.',
      },
      {
        name: 'autocomplete',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'name',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'dirClass',
        type: "'left' | 'right'",
        defaultValue: "'right'",
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: "''",
      },
    ],
    outputs: [],
  },
  {
    name: 'IhoCheckboxComponent',
    selector: 'mytag-checkbox',
    inputs: [
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md'",
        defaultValue: "'xs'",
      },
      {
        name: 'color',
        type: "'gray' | 'black'",
        defaultValue: "'gray'",
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'supportingText',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'required',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'id',
        type: 'string',
        defaultValue: 'شناسه خودکار',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: 'undefined',
      },
      {
        name: 'dir',
        type: "'rtl' | 'ltr'",
        defaultValue: "'rtl'",
      },
    ],
    outputs: [
      {
        name: 'changed',
        type: 'boolean',
      },
    ],
  },
  {
    name: 'FooterComponent',
    selector: 'mytag-footer-ds',
    inputs: [
      {
        name: 'brandName',
        type: 'string',
        defaultValue: "'سامانه طراحی'",
      },
      {
        name: 'homeUrl',
        type: 'string',
        defaultValue: "'/'",
      },
      {
        name: 'logoUrl',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'phoneNumber',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'features',
        type: 'readonly FooterFeature[]',
        defaultValue: '[]',
      },
      {
        name: 'sections',
        type: 'readonly FooterSection[]',
        defaultValue: '[]',
      },
      {
        name: 'contacts',
        type: 'readonly FooterContact[]',
        defaultValue: '[]',
      },
      {
        name: 'socialLinks',
        type: 'readonly NavigationLink[]',
        defaultValue: '[]',
      },
      {
        name: 'copyright',
        type: 'string',
        defaultValue: "'تمام حقوق محفوظ است.'",
      },
      {
        name: 'showLinks',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [],
  },
  {
    name: 'IhoSelectComponent',
    selector: 'mytag-select',
    inputs: [
      {
        name: 'searchable',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'required',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'size',
        type: "'md' | 'lg'",
        defaultValue: "'md'",
      },
      {
        name: 'borderless',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'error',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: "'Select...'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [
      {
        name: 'valueChange',
        type: 'any',
      },
    ],
  },
  {
    name: 'IhoOptionComponent',
    selector: 'mytag-option',
    inputs: [
      {
        name: 'value',
        type: 'any',
        defaultValue: 'undefined',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: 'undefined',
      },
      {
        name: 'id',
        type: 'string',
        defaultValue: 'undefined',
      },
      {
        name: 'searchable',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'selected',
        type: 'boolean',
        defaultValue: 'false',
        note: 'مقدار انتخاب‌شده را در Select با ngModel کنترل کنید.',
      },
    ],
    outputs: [
      {
        name: 'optionClick',
        type: 'IhoOptionComponent',
      },
    ],
  },
  {
    name: 'CardComponent',
    selector: 'mytag-card',
    inputs: [
      {
        name: 'type',
        type: "'standard' | 'category' | 'horizontal'",
        defaultValue: "'standard'",
      },
      {
        name: 'withPriceDevider',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'withPrice',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'titleLeftBody',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'location',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'star',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'rating',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'reviewCount',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'price',
        type: 'number',
        defaultValue: '0',
      },
      {
        name: 'BoardPrice',
        type: 'number',
        defaultValue: '0',
      },
      {
        name: 'tags',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'tagsAdd',
        type: 'string[]',
        defaultValue: '[]',
        note: 'در API تعریف شده است؛ مقدار این ورودی در خروجی فعلی کارت استفاده نمی‌شود.',
      },
      {
        name: 'image',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'discount',
        type: 'string',
        defaultValue: "'0'",
      },
      {
        name: 'priceUnit',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'isAddvertisement',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'featured',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'featuredLabel',
        type: 'string',
        defaultValue: "'ویژه'",
      },
      {
        name: 'labelBadge',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'badgeLabel',
        type: 'string',
        defaultValue: "'اطلاعات'",
      },
      {
        name: 'unavailable',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'actionLabel',
        type: 'string',
        defaultValue: "'مشاهده جزئیات'",
      },
      {
        name: 'unavailableLabel',
        type: 'string',
        defaultValue: "'ناموجود'",
      },
      {
        name: 'letMeKnow',
        type: 'boolean',
        defaultValue: 'false',
        note: 'در API تعریف شده است؛ مقدار این ورودی در خروجی فعلی کارت استفاده نمی‌شود.',
      },
      {
        name: 'actionLink',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'fallbackImage',
        type: 'string',
        defaultValue: 'SVG داخلی',
      },
      {
        name: 'promotions',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'currency',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'showPromotions',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [
      {
        name: 'clickBtnCard',
        type: 'Event',
      },
    ],
  },
  {
    name: 'ChipComponent',
    selector: 'mytag-chip',
    inputs: [
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'size',
        type: "'sm' | 'md'",
        defaultValue: "'md'",
      },
      {
        name: 'variant',
        type: "'neutral' | 'primary'",
        defaultValue: "'neutral'",
      },
      {
        name: 'type',
        type: "'action' | 'filter'",
        defaultValue: "'action'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'selected',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'showAdd',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'showRemove',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'rounded',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [
      {
        name: 'removed',
        type: 'void',
      },
      {
        name: 'added',
        type: 'void',
      },
      {
        name: 'selectedChange',
        type: 'boolean',
      },
    ],
  },
  {
    name: 'badgeComponent',
    selector: 'mytag-badge',
    inputs: [
      {
        name: 'label',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        defaultValue: "'md'",
      },
      {
        name: 'radius',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'border',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'animatedLabel',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'variant',
        type: "'default' | 'lite' | 'primary' | 'warning' | 'error' | 'success' | 'text-success' | 'text-warning' | 'text-error' | 'text-primary'",
        defaultValue: "'default'",
      },
      {
        name: 'mainContent',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [],
  },
  {
    name: 'ButtonComponent',
    selector: 'mytag-button',
    inputs: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'error' | 'default' | 'error-inside' | 'ghost-primary' | 'ghost-error' | 'ghost-secondary' | 'gray-inside' | 'primary-inside' | 'secondary-inside'",
        defaultValue: "'primary'",
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg' | 'xl'",
        defaultValue: "'md'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'type',
        type: "'button' | 'link'",
        defaultValue: "'button'",
      },
      {
        name: 'href',
        type: 'string | null',
        defaultValue: 'null',
      },
      {
        name: 'widthPx',
        type: 'number',
        defaultValue: 'undefined',
      },
      {
        name: 'widthPercent',
        type: 'number',
        defaultValue: 'undefined',
      },
      {
        name: 'showLoading',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [
      {
        name: 'clickBtn',
        type: 'any',
      },
    ],
  },
  {
    name: 'AccordionComponent',
    selector: 'mytag-accordion',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'size',
        type: "'sm' | 'md'",
        defaultValue: "'md'",
      },
      {
        name: 'variant',
        type: "'outline' | 'filled'",
        defaultValue: "'outline'",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'expanded',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'border',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        name: 'rounded',
        type: 'boolean',
        defaultValue: 'false',
      },
    ],
    outputs: [],
  },
  {
    name: 'BreadcrumbComponent',
    selector: 'mytag-breadcrumb',
    inputs: [
      {
        name: 'items',
        type: 'BreadcrumbItem[]',
        defaultValue: '[]',
      },
      {
        name: 'separator',
        type: 'string',
        defaultValue: "'iho-icon-arrow-left-01-sharp'",
        note: 'این ورودی تعریف شده، اما قالب فعلی آیکن جداکنندهٔ ثابت دارد.',
      },
    ],
    outputs: [],
  },
  {
    name: 'IhoBottomsheetComponent',
    selector: 'mytag-bottomsheet',
    inputs: [
      {
        name: 'position',
        type: "'bottom' | 'top' | 'left' | 'right'",
        defaultValue: "'bottom'",
      },
      {
        name: 'isOpen',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'fullHeight',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'dir',
        type: 'string',
        defaultValue: "'rtl'",
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'data',
        type: 'any',
        defaultValue: 'undefined',
        note: 'برای نمایش دادهٔ سفارشی از BottomsheetService و کامپوننت محتوای آن استفاده کنید.',
      },
      {
        name: 'iconClass',
        type: 'string',
        defaultValue: "''",
      },
      {
        name: 'contentContainerPadding',
        type: 'boolean',
        defaultValue: 'true',
      },
    ],
    outputs: [
      {
        name: 'closed',
        type: 'void',
      },
    ],
  },
  {
    name: 'DesignSystemComponent',
    selector: 'mytag-design-system',
    inputs: [],
    outputs: [],
  },
];
