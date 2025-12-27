import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    HostBinding,
    Input,
    Output
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
    selector: 'iho-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IhoCheckboxComponent),
            multi: true
        }
    ]
})
export class IhoCheckboxComponent  {
    @Input() size: 'xs' | 'sm' | 'md' = 'xs';
    @Input() color: 'gray' | 'black' = 'gray';
    /** متن کنار چک‌باکس */
    @Input() label = '';

    /** غیرفعال */
    @Input() disabled = false;

    /** لازم/اجباری (صرفاً برای aria) */
    @Input() required = false;

    /** حالت indeterminate (خط تیره) */
    @Input() indeterminate = false;

    /** شناسه برای ارتباط با label */
    @Input() id = `iho-chb-${Math.random().toString(36).slice(2)}`;

    /** نام فیلد فرم */
    @Input() name?: string;

    /** مقدار فعلی */
    value = false;
    @Input() dir?: string = 'rtl';

    /** تغییرات بیرونی */
    @Output() changed = new EventEmitter<boolean>();

    // a11y: نقش checkbox برای Screen Reader در کل wrapper
    @HostBinding('attr.role') role = 'checkbox';
    @HostBinding('attr.aria-checked') get ariaChecked() {
        return this.indeterminate ? 'mixed' : String(this.value);
    }
    @HostBinding('attr.aria-required') get ariaRequired() {
        return this.required ? 'true' : null;
    }
    @HostBinding('attr.aria-disabled') get ariaDisabled() {
        return this.disabled ? 'true' : null;
    }
    @HostBinding('class.is-disabled') get isDisabledClass() {
        return this.disabled;
    }

    // ControlValueAccessor
     onChange: (val: boolean) => void = () => { };
     onTouched: () => void = () => { };

    writeValue(obj: any): void {
        this.value = !!obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    toggleByClick(evt: Event) {
        if (this.disabled) return;
        evt.stopPropagation();
        if (this.indeterminate) {
            // از indeterminate خارج شو و برو به true
            this.indeterminate = false;
            this.value = true;
        } else {
            this.value = !this.value;
        }
        this.emitChange();
    }

    onInputChange(nativeChecked: boolean) {
        if (this.disabled) return;
        // اگر ورودی native تغییر کرد، مقدار ما sync شود
        this.indeterminate = false;
        this.value = !!nativeChecked;
        this.emitChange();
    }

    private emitChange() {
        this.onChange(this.value);
        this.changed.emit(this.value);
        this.onTouched();
    }
}
