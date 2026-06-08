import { Component, ContentChildren, forwardRef, Input, QueryList, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioComponent } from './radio.component';

@Component({
    selector: 'iho-radio-group',
    template: `<ng-content></ng-content>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IhoRadioGroupComponent),
        multi: true,
    }],
})
export class IhoRadioGroupComponent implements ControlValueAccessor, AfterContentInit {
    @Input() name = `iho-radio-group-${Math.random().toString(36).slice(2)}`;
    @Input() disabled = false;

    @ContentChildren(RadioComponent) options!: QueryList<RadioComponent>;

    private value: any = null;
    private onChange = (_: any) => { };
    private onTouched = () => { };

    ngAfterContentInit(): void {
        // هر option را به گروه وصل کن
        this.options.forEach(opt => opt.registerHost(this));
        if (this.value == null) {
            const prechecked = this.options.find(o => o.checked);
            if (prechecked) {
                this.value = prechecked.radioValue;
                this.onChange(this.value);   // تا فرم هم مقدار بگیره
                // اگر نمی‌خوای touched بشه، onTouched رو صدا نزن
            }
        }
        this.syncOptions();
        // اگر گزینه‌ها دینامیکاً تغییر کردند
        this.options.changes.subscribe(() => {
            this.options.forEach(opt => opt.registerHost(this));
            this.syncOptions();
        });
    }

    // CVA
    writeValue(v: any): void { this.value = v; this.syncOptions(); }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; this.syncOptions(); }

    // از طرف گزینه فراخوانی می‌شود
    selectFromOption(opt: RadioComponent) {
        if (this.disabled || opt.disabled) return;
        this.value = opt.radioValue;
        this.onChange(this.value);
        this.onTouched();
        this.syncOptions();
    }

    private syncOptions() {
        if (!this.options) return;
        this.options.forEach(opt => {
            opt.groupName = this.name;
            opt.groupDisabled = this.disabled;
            opt.checked = (this.value === opt.radioValue);
        });
    }
}
