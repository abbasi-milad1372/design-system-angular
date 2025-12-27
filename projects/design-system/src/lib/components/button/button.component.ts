import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'iho-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() label = 'Button';
    @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
    @Input() disabled = false;

    get classes(): string {
        const base = 'px-4 py-2 rounded font-semibold transition';
        const variants = {
            primary: 'bg-primary text-white hover:bg-primary/90',
            secondary: 'bg-secondary text-white hover:bg-secondary/90',
            danger: 'bg-danger text-white hover:bg-danger/90',
        };
        return `${base} ${variants[this.variant]} ${this.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
    }
}
