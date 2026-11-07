import {
    Component,
    EventEmitter,
    forwardRef,
    HostBinding,
    Input,
    Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type IhoCheckboxSize = 'xs' | 'sm' | 'md';
export type IhoCheckboxColor = 'gray' | 'black';

@Component({
    selector: 'mytag-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IhoCheckboxComponent),
        multi: true
    }]
})
export class IhoCheckboxComponent implements ControlValueAccessor {
    @Input() size: IhoCheckboxSize = 'xs';
    @Input() color: IhoCheckboxColor = 'gray';
    @Input() label = '';
    @Input() supportingText = '';
    @Input() disabled = false;
    @Input() required = false;
    @Input() indeterminate = false;
    @Input() id = `iho-chb-${Math.random().toString(36).slice(2)}`;
    @Input() name?: string;
    @Input() dir: 'rtl' | 'ltr' = 'rtl';

    @Output() changed = new EventEmitter<boolean>();

    value = false;

    @HostBinding('attr.role') role = 'checkbox';
    @HostBinding('attr.aria-checked') get ariaChecked(): string {
        return this.indeterminate ? 'mixed' : String(this.value);
    }
    @HostBinding('attr.aria-required') get ariaRequired(): string | null {
        return this.required ? 'true' : null;
    }
    @HostBinding('attr.aria-disabled') get ariaDisabled(): string | null {
        return this.disabled ? 'true' : null;
    }
    @HostBinding('class.is-disabled') get isDisabledClass(): boolean {
        return this.disabled;
    }

    onChange: (value: boolean) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: unknown): void {
        this.value = Boolean(value);
    }

    registerOnChange(fn: (value: boolean) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onInputChange(nativeChecked: boolean): void {
        if (this.disabled) return;
        this.indeterminate = false;
        this.value = nativeChecked;
        this.onChange(this.value);
        this.changed.emit(this.value);
        this.onTouched();
    }
}