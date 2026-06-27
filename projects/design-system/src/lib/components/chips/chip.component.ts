import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'iho-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
    @Input() label: string = '';
    @Input() size: 'sm' | 'md' = 'md';
    @Input() variant: 'neutral' | 'primary' = 'neutral';
    @Input() type: 'action' | 'filter' = 'action';
    @Input() disabled = false;
    @Input() selected = false;
    @Input() showAdd = false;
    @Input() showRemove = false;
    @Input() rounded = false;

    @Output() removed = new EventEmitter<void>();
    @Output() added = new EventEmitter<void>();
    @Output() selectedChange = new EventEmitter<boolean>();

    get classes(): string[] {
        const classList = [
            'chip',
            `chip--${this.size}`,
            `chip--${this.variant}`,
            `chip--${this.type}`
        ];

        if (this.rounded) {
            classList.push('chip--rounded');
        }

        if (this.selected) {
            classList.push('chip--selected');
        }

        if (this.disabled) {
            classList.push('chip--disabled');
        }

        return classList;
    }

    onRemove(event: MouseEvent): void {
        event.stopPropagation();
        if (!this.disabled) {
            this.removed.emit();
        }
    }

    onAdd(event: MouseEvent): void {
        event.stopPropagation();
        if (!this.disabled) {
            this.added.emit();
        }
    }

    onChipClick(): void {
        if (!this.disabled && this.type === 'filter') {
            this.selected = !this.selected;
            this.selectedChange.emit(this.selected);
        }
    }
}