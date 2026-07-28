import { Component } from '@angular/core';

type BadgeVariant = 'default' | 'lite' | 'primary' | 'warning' | 'error' | 'success' |
    'text-success' | 'text-warning' | 'text-error' | 'text-primary';
type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
    selector: 'app-badge-view',
    templateUrl: './badge-view.component.html',
})
export class BadgeViewComponent {
    variants: BadgeVariant[] = [
        'default', 'lite', 'primary', 'warning', 'error', 'success',
        'text-success', 'text-warning', 'text-error', 'text-primary'
    ];
    sizes: BadgeSize[] = ['sm', 'md', 'lg'];

    code = `<iho-badge label="جدید" variant="primary" size="md"></iho-badge>
<iho-badge label="تخفیف" variant="error" [border]="true"></iho-badge>
<iho-badge label="قابل استرداد" variant="success" [radius]="true"></iho-badge>

<iho-badge label="هتل منتخب" variant="primary" [radius]="true">
  <span icon-right class="iho-icon-hotel"></span>
  <span dot>•</span>
</iho-badge>

<iho-badge variant="default" [mainContent]="true">
  <span label>محتوای سفارشی</span>
</iho-badge>`;
}