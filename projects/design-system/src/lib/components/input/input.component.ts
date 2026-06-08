import { Component, forwardRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'iho-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true,
    }],
})
export class InputComponent implements ControlValueAccessor {
    @Input() type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' = 'text';
    @Input() size: 'md' | 'lg' = 'md';
    @Input() template: 'floating' | 'inline' = 'floating';
    @Input() label = '';
    @Input() placeholder = '';
    @Input() errorFloating: string | null = null;
    @Input() errorInline: string | null = null;
    @Input() successInline: string | null = null;
    @Input() hint: string | null = null;
    private _disabled = false;

    @HostBinding('class.input--disabled') hostDisabled = false;

    @Input()
    set disabled(v: boolean) {
        this._disabled = !!v;
        this.hostDisabled = this._disabled; 
        this.cdr.markForCheck();
    }
    get disabled(): boolean {
        return this._disabled;
    }
    @Input() readonly = false;
    @Input() rounded: 'left' | 'right' | 'none' = 'none';
    @Input() icon = '';
    @Input() iconClass = '';
    @Input() required = false;
    @Input() border = true;
    @Input() autocomplete: string | null = null;
    @Input() name: string | null = null;
    @Input() dirClass: 'left' | 'right' = 'right';

    @Input() value: string = '';
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
        this.cdr.markForCheck();
    }
    registerOnChange(fn: (val: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void {
        // استفاده از setter برای همگام‌سازی
        this.disabled = isDisabled;
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
