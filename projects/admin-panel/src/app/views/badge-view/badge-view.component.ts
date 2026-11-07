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

    code = `<mytag-badge label="جدید" variant="primary" size="md"></mytag-badge>
<mytag-badge label="تخفیف" variant="error" [border]="true"></mytag-badge>
<mytag-badge label="قابل استرداد" variant="success" [radius]="true"></mytag-badge>

<mytag-badge label="مورد منتخب" variant="primary" [radius]="true">
  <span icon-right class="iho-icon-building-landmark"></span>
  <span dot>•</span>
</mytag-badge>

<mytag-badge variant="default" [mainContent]="true">
  <span label>محتوای سفارشی</span>
</mytag-badge>`;
}