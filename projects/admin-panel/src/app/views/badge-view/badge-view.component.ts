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
}