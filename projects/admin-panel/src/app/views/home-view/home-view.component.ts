import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

type PreviewVariant = 'primary' | 'secondary' | 'ghost-primary';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  readonly version = '0.5.0';
  readonly repositoryUrl =
    'https://github.com/abbasi-milad1372/design-system-angular';
  readonly installCommand = `npm install ${this.repositoryUrl}/releases/download/v${this.version}/mytag-design-system-${this.version}.tgz`;
  readonly moduleCode = `import { NgModule } from '@angular/core';
import { MytagButtonModule } from '@mytag/design-system';

@NgModule({
  imports: [MytagButtonModule],
})
export class AppModule {}`;
  readonly templateCode = `<mytag-button variant="primary" size="md">
  <span label>شروع طراحی</span>
</mytag-button>`;
  readonly assetsCode = `"styles": [
  "src/styles.scss",
  "node_modules/@mytag/design-system/src/lib/assets/styles/styles.scss",
  "node_modules/@mytag/design-system/src/lib/assets/styles/icons.scss"
],
"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/@mytag/design-system/src/lib/assets/fonts",
    "output": "assets/fonts"
  }
]`;
  readonly previewOptions: { value: PreviewVariant; label: string }[] = [
    { value: 'primary', label: 'اصلی' },
    { value: 'secondary', label: 'ثانویه' },
    { value: 'ghost-primary', label: 'بدون زمینه' },
  ];
  readonly categories = [
    {
      number: '۰۱',
      title: 'کنش و تعامل',
      description: 'دکمه‌ها با اندازه‌ها، حالت‌ها و سبک‌های مختلف.',
      path: '/button',
      tags: 'Button · Chip',
    },
    {
      number: '۰۲',
      title: 'فرم و ورودی',
      description: 'ورودی‌های هماهنگ با فرم‌ها و وضعیت‌های اعتبارسنجی.',
      path: '/input',
      tags: 'Input · Select · Checkbox',
    },
    {
      number: '۰۳',
      title: 'نمایش محتوا',
      description: 'کارت‌ها و نشان‌ها برای نمایش منظم اطلاعات.',
      path: '/cards',
      tags: 'Card · Badge · Tooltip',
    },
    {
      number: '۰۴',
      title: 'ساختار و ناوبری',
      description: 'از ناوبری تا پایین صفحه، با محتوای قابل تنظیم.',
      path: '/navbar',
      tags: 'Navbar · Tabs · Footer',
    },
  ];
  previewVariant: PreviewVariant = 'primary';
  previewDisabled = false;
  previewClicks = 0;
  copiedSnippet = '';
  copyFeedback = '';
  copyFailed = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get previewCode(): string {
    return `<mytag-button variant="${this.previewVariant}"${
      this.previewDisabled ? ' [disabled]="true"' : ''
    }>\n  <span label>شروع طراحی</span>\n</mytag-button>`;
  }

  async copyCode(id: string, code: string): Promise<void> {
    this.copyFailed = false;
    this.copiedSnippet = '';
    try {
      const clipboard = this.document.defaultView?.navigator.clipboard;
      if (!clipboard) {
        throw new Error('Clipboard unavailable');
      }
      await clipboard.writeText(code);
      this.copiedSnippet = id;
      this.copyFeedback = 'کد با موفقیت کپی شد.';
    } catch {
      this.copyFailed = true;
      this.copyFeedback =
        'کپی خودکار در دسترس نیست؛ متن کد را انتخاب و کپی کنید.';
    }
  }
}
