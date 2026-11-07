import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

type TokenMode = 'solid' | 'transparency' | 'all';

interface ColorFamily {
  readonly id: string;
  readonly label: string;
  readonly description: string;
}

interface ColorToken {
  readonly name: string;
  readonly value: string;
  readonly family: string;
  readonly shade: string;
  readonly transparent: boolean;
  readonly opacity: number | null;
  readonly foreground: string;
  readonly searchText: string;
}

interface ColorGroup extends ColorFamily {
  readonly tokens: readonly ColorToken[];
}

@Component({
  selector: 'app-colors-view',
  templateUrl: './colors-view.component.html',
  styleUrls: ['./colors-view.component.scss'],
})
export class ColorsViewComponent implements OnInit {
  readonly families: readonly ColorFamily[] = [
    {
      id: 'primary',
      label: 'رنگ اصلی',
      description: 'کنش‌های اصلی، لینک‌ها و حالت انتخاب.',
    },
    {
      id: 'secondary',
      label: 'رنگ مکمل',
      description: 'کنش‌ها و تأکیدهای مکمل رابط کاربری.',
    },
    {
      id: 'success',
      label: 'موفقیت',
      description: 'تأیید انجام عملیات و وضعیت موفق.',
    },
    {
      id: 'warning',
      label: 'هشدار',
      description: 'مواردی که نیاز به توجه کاربر دارند.',
    },
    {
      id: 'error',
      label: 'خطا',
      description: 'خطاها، پیام‌های نامعتبر و کنش‌های حساس.',
    },
    { id: 'gray', label: 'خاکستری', description: 'متن‌ها، مرزها و سطوح خنثی.' },
    { id: 'white', label: 'سفید', description: 'سطوح روشن و پس‌زمینهٔ محتوا.' },
  ];
  readonly modes: readonly { id: TokenMode; label: string }[] = [
    { id: 'solid', label: 'رنگ‌های پایه' },
    { id: 'transparency', label: 'رنگ‌های شفاف' },
    { id: 'all', label: 'همه توکن‌ها' },
  ];
  tokens: readonly ColorToken[] = [];
  groups: readonly ColorGroup[] = [];
  selectedToken: ColorToken | null = null;
  query = '';
  family = 'all';
  mode: TokenMode = 'solid';
  copiedToken = '';
  feedback = '';
  copyFailed = false;
  private copyRequest = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.refreshTokens();
  }

  get visibleCount(): number {
    return this.groups.reduce((total, group) => total + group.tokens.length, 0);
  }

  get solidCount(): number {
    return this.tokens.filter((token) => !token.transparent).length;
  }

  get transparencyCount(): number {
    return this.tokens.filter((token) => token.transparent).length;
  }

  get familyCount(): number {
    return new Set(this.tokens.map((token) => token.family)).size;
  }

  get cssExample(): string {
    return this.selectedToken
      ? `.my-surface {\n  background-color: var(${this.selectedToken.name});\n}`
      : '';
  }

  get templateExample(): string {
    return this.selectedToken
      ? `<div [style.backgroundColor]="'var(${this.selectedToken.name})'">\n  محتوای نمونه\n</div>`
      : '';
  }

  refreshTokens(): void {
    const browser = this.document.defaultView;
    if (!browser) {
      return;
    }
    const computed = browser.getComputedStyle(this.document.documentElement);
    const names = new Set(
      Array.from(computed).filter((name) => name.startsWith('--color-'))
    );
    // CSSOM also discovers custom properties in browsers that omit them from
    // the enumerable computed-style property list.
    const collect = (rules: CSSRuleList): void => {
      for (const rule of Array.from(rules)) {
        if ('style' in rule) {
          for (const name of Array.from((rule as CSSStyleRule).style)) {
            if (name.startsWith('--color-')) {
              names.add(name);
            }
          }
        }
        if ('cssRules' in rule) {
          collect((rule as CSSGroupingRule).cssRules);
        }
      }
    };
    for (const sheet of Array.from(this.document.styleSheets)) {
      try {
        collect(sheet.cssRules);
      } catch {
        /* Cross-origin sheets cannot be inspected. */
      }
    }
    const result: ColorToken[] = [];
    for (const name of names) {
      const match = name.match(/^--color-(transparency-)?([a-z]+)-(.+)$/);
      const value = computed.getPropertyValue(name).trim();
      if (!match || !value) {
        continue;
      }
      const family = this.families.find((item) => item.id === match[2]);
      if (!family) {
        continue;
      }
      const rgba = this.parseColor(value);
      result.push({
        name,
        value,
        family: family.id,
        shade: match[3],
        transparent: Boolean(match[1]),
        opacity: rgba ? Math.round(rgba[3] * 100) : null,
        foreground: this.foreground(rgba),
        searchText: this.normalize(
          `${name} ${value} ${family.label} ${family.description} ${
            match[1] ? 'شفاف شفافیت transparency' : 'پایه solid'
          }`
        ),
      });
    }
    this.tokens = result.sort(
      (a, b) =>
        this.families.findIndex((item) => item.id === a.family) -
          this.families.findIndex((item) => item.id === b.family) ||
        Number(a.transparent) - Number(b.transparent) ||
        (a.shade === 'DEFAULT' ? -1 : Number(a.shade)) -
          (b.shade === 'DEFAULT' ? -1 : Number(b.shade))
    );
    this.selectedToken =
      this.tokens.find((token) => token.name === this.selectedToken?.name) ||
      this.tokens.find((token) => token.name === '--color-primary-500') ||
      this.tokens[0] ||
      null;
    this.applyFilters();
  }

  applyFilters(): void {
    const terms = this.normalize(this.query).split(/\s+/).filter(Boolean);
    this.groups = this.families
      .map((family) => ({
        ...family,
        tokens: this.tokens.filter(
          (token) =>
            token.family === family.id &&
            (this.family === 'all' || this.family === family.id) &&
            (this.mode === 'all' ||
              token.transparent === (this.mode === 'transparency')) &&
            terms.every((term) => token.searchText.includes(term))
        ),
      }))
      .filter((group) => group.tokens.length > 0);
  }

  setMode(mode: TokenMode): void {
    this.mode = mode;
    this.applyFilters();
  }

  clearFilters(): void {
    this.query = '';
    this.family = 'all';
    this.mode = 'solid';
    this.applyFilters();
  }

  trackToken(index: number, token: ColorToken): string {
    return token.name;
  }

  showUsage(): void {
    const panel = this.document.getElementById('color-token-usage');
    panel?.focus({ preventScroll: true });
    panel?.scrollIntoView({ block: 'start' });
  }

  async copyToken(
    token: ColorToken,
    format: 'variable' | 'name' | 'value' = 'variable'
  ): Promise<void> {
    const request = ++this.copyRequest;
    this.selectedToken = token;
    this.copiedToken = '';
    this.feedback = '';
    this.copyFailed = false;
    const code =
      format === 'variable'
        ? `var(${token.name})`
        : format === 'name'
        ? token.name
        : token.value;
    try {
      const clipboard = this.document.defaultView?.navigator.clipboard;
      if (!clipboard) {
        throw new Error('Clipboard unavailable');
      }
      await clipboard.writeText(code);
      if (request !== this.copyRequest) {
        return;
      }
      this.copiedToken = token.name;
      this.feedback = `${code} کپی شد.`;
    } catch {
      if (request !== this.copyRequest) {
        return;
      }
      this.copyFailed = true;
      this.feedback =
        'کپی خودکار در دسترس نیست؛ متغیر یا مقدار را از بخش راهنمای استفاده انتخاب و کپی کنید.';
    }
  }

  private normalize(value: string): string {
    return value
      .normalize('NFKC')
      .replace(/ي/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/\u200c/g, ' ')
      .trim()
      .toLowerCase();
  }

  private parseColor(value: string): [number, number, number, number] | null {
    const hex = value.match(/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i);
    if (hex) {
      const expanded =
        hex[1].length <= 4
          ? hex[1]
              .split('')
              .map((char) => char + char)
              .join('')
          : hex[1];
      return [
        parseInt(expanded.slice(0, 2), 16),
        parseInt(expanded.slice(2, 4), 16),
        parseInt(expanded.slice(4, 6), 16),
        expanded.length === 8 ? parseInt(expanded.slice(6), 16) / 255 : 1,
      ];
    }
    if (/^rgba?\(/i.test(value)) {
      const channels = value.match(/[\d.]+/g)?.map(Number);
      if (channels && channels.length >= 3) {
        return [channels[0], channels[1], channels[2], channels[3] ?? 1];
      }
    }
    return null;
  }

  private foreground(rgba: [number, number, number, number] | null): string {
    if (!rgba) {
      return '#16181b';
    }
    const channels = rgba
      .slice(0, 3)
      .map((channel) => (channel * rgba[3] + 255 * (1 - rgba[3])) / 255)
      .map((channel) =>
        channel <= 0.04045
          ? channel / 12.92
          : Math.pow((channel + 0.055) / 1.055, 2.4)
      );
    const luminance =
      channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    return 1.05 / (luminance + 0.05) >= (luminance + 0.05) / 0.05
      ? '#ffffff'
      : '#16181b';
  }
}
