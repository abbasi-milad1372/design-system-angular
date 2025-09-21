import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    HostBinding,
    Input,
    Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'iho-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IhoSwitchComponent),
        multi: true
    }]
})
export class IhoSwitchComponent  {
    /** متن کنار سوئیچ (سمت چپ در RTL) */
    @Input() label = '';
    /** غیرفعال */
    @Input() disabled = false;
    /** لازم/اجباری (ARIA) */
    @Input() required = false;
    /** نام فیلد فرم */
    @Input() name?: string;
    /** شناسه */
    @Input() id = `iho-switch-${Math.random().toString(36).slice(2)}`;

    /** مقدار (روشن/خاموش) */
    value = false;

    /** تغییر رو به بیرون هم بفرستیم (اختیاری) */
    @Output() changed = new EventEmitter<boolean>();

    // a11y: نقش switch برای Screen Reader
    @HostBinding('attr.role') role = 'switch';
    @HostBinding('attr.aria-checked') get ariaChecked() { return String(this.value); }
    @HostBinding('attr.aria-required') get ariaRequired() { return this.required ? 'true' : null; }
    @HostBinding('attr.aria-disabled') get ariaDisabled() { return this.disabled ? 'true' : null; }
    @HostBinding('class.is-disabled') get isDisabledClass() { return this.disabled; }

    // CVA
     onChange: (val: boolean) => void = () => { };
     onTouched: () => void = () => { };

    writeValue(obj: any): void { this.value = !!obj; }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

    onNativeChange(nativeChecked: boolean) {
        if (this.disabled) return;
        this.value = !!nativeChecked;
        this.onChange(this.value);
        this.changed.emit(this.value);
        this.onTouched();
    }
}
