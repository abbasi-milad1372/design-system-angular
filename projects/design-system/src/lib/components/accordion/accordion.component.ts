import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'iho-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: '0',
                opacity: '0',
                overflow: 'hidden'
            })),
            state('expanded', style({
                height: '*',
                opacity: '1',
                overflow: 'hidden'
            })),
            transition('collapsed <=> expanded', [
                animate('300ms ease-in-out')
            ])
        ])
    ]
})
export class AccordionComponent {
    @Input() title: string = '';
    @Input() size: 'sm' | 'md' = 'md';
    @Input() variant: 'outline' | 'filled' = 'outline';
    @Input() disabled = false;
    @Input() expanded = false;
    @Input() border = true;
    @Input() rounded = false;
    get animationState(): string {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    get classes(): string[] {
        const classList = [
            'accordion',
            `accordion--${this.size}`,
            `accordion--${this.variant}`
        ];

        if (this.border) {
            classList.push('accordion__border');
            if (this.rounded) {
                classList.push('accordion__rounded');
            }
        }

        if (this.expanded) {
            classList.push('accordion--expanded');
        }

        if (this.disabled) {
            classList.push('accordion--disabled');
        }

        return classList;
    }

    get headerClasses(): string[] {
        const classList = [
            'accordion__header',
            `accordion__header--${this.size}`
        ];

        if (this.disabled) {
            classList.push('accordion__header--disabled');
        }

        return classList;
    }

    get contentClasses(): string[] {
        const classList = ['accordion__content'];

        if (this.expanded) {
            classList.push('accordion__content--expanded');
        }

        return classList;
    }

    toggle(): void {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
}
