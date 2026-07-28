import { Component } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'error' | 'default' | 'error-inside' |
    'ghost-primary' | 'ghost-error' | 'ghost-secondary' | 'gray-inside' |
    'primary-inside' | 'secondary-inside';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
    selector: 'app-button-view',
    templateUrl: './button-view.component.html',
})
export class ButtonViewComponent {
    variants: ButtonVariant[] = [
        'primary', 'secondary', 'error', 'default', 'error-inside',
        'ghost-primary', 'ghost-error', 'ghost-secondary', 'gray-inside',
        'primary-inside', 'secondary-inside'
    ];
    sizes: ButtonSize[] = ['sm', 'md', 'lg', 'xl'];

    code = `<iho-button variant="primary" size="md">
  <span label>ساخت حساب</span>
</iho-button>

<iho-button variant="ghost-primary" size="lg">
  <span icon-right class="iho-icon-user"></span>
  <span label>ورود به حساب</span>
</iho-button>

<iho-button variant="error" [disabled]="true">
  <span label>حذف</span>
</iho-button>

<iho-button variant="primary" [showLoading]="true">
  <span label>در حال ثبت</span>
</iho-button>

<iho-button type="link" href="/hotels" [widthPercent]="100">
  <span label>مشاهده هتل‌ها</span>
</iho-button>`;
}