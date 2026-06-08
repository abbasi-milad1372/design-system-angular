import { Component, Input } from '@angular/core';

@Component({
    selector: 'iho-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
})
export class badgeComponent {
    @Input() label = '';
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() radius = false;
    @Input() border = false;
    @Input() animatedLabel = false;
    @Input() variant: 'default' | 'lite' | 'primary' | 'warning' | 'error' | 'success' | 'text-success' | 'text-warning' | 'text-error' | 'text-primary' = 'default';
    @Input() mainContent = false

    get badgeClasses(): any {
        return {
            [`badge--${this.size}`]: true,
            [`badge--${this.variant}`]: true,
            'badge--border': this.border,
            'badge--rounded': this.radius,
        };
    }
}
