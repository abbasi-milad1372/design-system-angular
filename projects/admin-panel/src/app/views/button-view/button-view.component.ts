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

    code = `<mytag-button variant="primary" size="md">
  <span label>ساخت حساب</span>
</mytag-button>

<mytag-button variant="ghost-primary" size="lg">
  <span icon-right class="iho-icon-user"></span>
  <span label>ورود به حساب</span>
</mytag-button>

<mytag-button variant="error" [disabled]="true">
  <span label>حذف</span>
</mytag-button>

<mytag-button variant="primary" [showLoading]="true">
  <span label>در حال ثبت</span>
</mytag-button>

<mytag-button type="link" href="/cards" [widthPercent]="100">
  <span label>مشاهده موارد</span>
</mytag-button>`;
}