import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CatalogueIcon, ICON_CATALOGUE } from './icon-catalogue';

type IconCategory =
  | 'all'
  | 'interface'
  | 'arrows'
  | 'communication'
  | 'places'
  | 'social';

interface IconGroup {
  readonly id: IconCategory;
  readonly label: string;
}

interface DisplayIcon extends CatalogueIcon {
  readonly category: Exclude<IconCategory, 'all'>;
  readonly searchText: string;
}

@Component({
  selector: 'app-icons-view',
  templateUrl: './icons-view.component.html',
  styleUrls: ['./icons-view.component.scss'],
})
export class IconsViewComponent {
  readonly groups: readonly IconGroup[] = [
    { id: 'all', label: 'همه آیکن‌ها' },
    { id: 'interface', label: 'رابط کاربری' },
    { id: 'arrows', label: 'جهت و مسیر' },
    { id: 'communication', label: 'افراد و ارتباطات' },
    { id: 'places', label: 'مکان‌ها و نقشه‌ها' },
    { id: 'social', label: 'شبکه‌های اجتماعی' },
  ];
  readonly icons: readonly DisplayIcon[] = ICON_CATALOGUE.map((icon) => {
    const category = this.categorize(icon);
    return {
      ...icon,
      category,
      searchText: this.normalize(
        `${icon.name} ${icon.className} ${
          this.groups.find((group) => group.id === category)?.label
        } ${this.keywords(icon.name)}`
      ),
    };
  });
  readonly sizes = [24, 32, 48];
  readonly counts = new Map(
    this.groups.map((group) => [
      group.id,
      this.icons.filter(
        (icon) => group.id === 'all' || icon.category === group.id
      ).length,
    ])
  );
  visibleIcons: readonly DisplayIcon[] = this.icons;
  query = '';
  category: IconCategory = 'all';
  iconSize = 32;
  selectedIcon: CatalogueIcon = this.icons[0];
  copiedIcon = '';
  feedback = '';
  copyFailed = false;
  private copyRequest = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get selectedCode(): string {
    return this.iconCode(this.selectedIcon);
  }

  updateSearch(value: string): void {
    this.query = value;
    this.filterIcons();
  }

  selectCategory(category: IconCategory): void {
    this.category = category;
    this.filterIcons();
  }

  clearFilters(): void {
    this.query = '';
    this.category = 'all';
    this.filterIcons();
  }

  trackIcon(index: number, icon: CatalogueIcon): string {
    return icon.className;
  }

  async copyIcon(icon: CatalogueIcon): Promise<void> {
    const request = ++this.copyRequest;
    this.selectedIcon = icon;
    this.copiedIcon = '';
    this.copyFailed = false;
    this.feedback = '';
    try {
      const clipboard = this.document.defaultView?.navigator.clipboard;
      if (!clipboard) {
        throw new Error('Clipboard unavailable');
      }
      await clipboard.writeText(this.iconCode(icon));
      if (request !== this.copyRequest) {
        return;
      }
      this.copiedIcon = icon.className;
      this.feedback = `کد آیکن ${icon.name} کپی شد.`;
    } catch {
      if (request !== this.copyRequest) {
        return;
      }
      this.copyFailed = true;
      this.feedback =
        'کپی خودکار در دسترس نیست؛ کد را از بخش پیش‌نمایش انتخاب و کپی کنید.';
    }
  }

  private iconCode(icon: CatalogueIcon): string {
    const opening = `<span class="${icon.className}" aria-hidden="true">`;
    if (!icon.paths.length) {
      return `${opening}</span>`;
    }
    return `${opening}\n${icon.paths
      .map((path) => `  <span class="${path}"></span>`)
      .join('\n')}\n</span>`;
  }

  private filterIcons(): void {
    const terms = this.normalize(this.query).split(/\s+/).filter(Boolean);
    this.visibleIcons = this.icons.filter(
      (icon) =>
        (this.category === 'all' || icon.category === this.category) &&
        terms.every((term) => icon.searchText.includes(term))
    );
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

  private categorize(icon: CatalogueIcon): Exclude<IconCategory, 'all'> {
    if (/^(Platform|TypeGray|Social)/.test(icon.name)) {
      return 'social';
    }
    if (/arrow|route|hand-pointing|sort-by/.test(icon.name)) {
      return 'arrows';
    }
    if (/user|message|mail|customer-support|notification/.test(icon.name)) {
      return 'communication';
    }
    if (
      icon.paths.length ||
      /home|house|city|building|mosque|hospital|factory|hut|trulli|colosseum|lighthouse|station|location|gate|minar|ferris/.test(
        icon.name
      )
    ) {
      return 'places';
    }
    return 'interface';
  }

  private keywords(name: string): string {
    const aliases: readonly [RegExp, string][] = [
      [/user/, 'کاربر پروفایل افراد حساب'],
      [/message|mail/, 'پیام ایمیل گفتگو'],
      [/arrow|hand-pointing/, 'فلش بالا پایین چپ راست'],
      [/copy/, 'کپی رونوشت'],
      [/tick|checkmark/, 'تیک تایید موفق'],
      [/alert|information/, 'هشدار اطلاعات خطا'],
      [/home|house|hut/, 'خانه'],
      [/location|route|road/, 'موقعیت مسیر نقشه'],
      [/star/, 'ستاره امتیاز'],
      [/calendar|time/, 'تقویم زمان ساعت'],
      [/download/, 'دانلود دریافت'],
      [/notification/, 'اعلان زنگ'],
      [
        /wallet|price|discount|percent|sale|invoice/,
        'قیمت کیف پول تخفیف پرداخت',
      ],
      [/PlatformTelegram/, 'تلگرام'],
      [/^Social-icons$/, 'اینستاگرام'],
      [/^Social-icons-2$/, 'لینکدین'],
      [/multiplication/, 'بستن ضربدر حذف'],
    ];
    return aliases
      .filter(([pattern]) => pattern.test(name))
      .map(([, words]) => words)
      .join(' ');
  }
}
