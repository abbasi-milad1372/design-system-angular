import { Component, forwardRef, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'iho-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true,
    }],
})
export class InputComponent implements ControlValueAccessor {
    @Input() type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' = 'text';
    @Input() template: 'floating' | 'inline' = 'floating';
    @Input() label = '';
    @Input() placeholder = '';
    @Input() error: string | null = null;
    @Input() disabled = false;
    @Input() rounded: 'left' | 'right' | 'none' = 'none';
    @Input() icon = '';
    @Input() required = false;
    /** در صورت نیاز: autocomplete="off/on/..." */
    @Input() autocomplete: string | null = null;
    /** در صورت نیاز: name فقط جهت فرم‌های غیر Reactive */
    @Input() name: string | null = null;
    @Input() dirClass: 'left' | 'right' = 'right';

    value: string | number | null = null;
    isFocused = false;
    inputId = `iho-inp-${Math.random().toString(36).slice(2)}`;

    constructor(private cdr: ChangeDetectorRef) { }

    get roundedClass(): string {
        switch (this.rounded) {
            case 'left': return 'input__rounded-left-sm input__rounded-right-none';
            case 'right': return 'input__rounded-right-sm input__rounded-left-none';
            default: return '';
        }
    }

    // --- ControlValueAccessor ---
    private onChange: (val: any) => void = () => { };
    private onTouched: () => void = () => { };

    writeValue(value: any): void {
        this.value = value ?? null;
        // چون OnPush هستی، بعد از ورودی خارجی:
        this.cdr.markForCheck();
    }
    registerOnChange(fn: (val: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }

    // --- Handlers ---
    composing = false;
    handleInput(ev: Event): void {
        if (this.composing) return;
        const el = ev.target as HTMLInputElement;

        let v: any = el.value;
        if (this.type === 'number') {
            v = v === '' ? null : Number(v);
            if (Number.isNaN(v)) v = null;
        }
        this.value = v;
        this.onChange(v);
    }
    handleFocus(): void { this.isFocused = true; }
    handleBlur(): void { this.isFocused = false; this.onTouched(); }
}
