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
}