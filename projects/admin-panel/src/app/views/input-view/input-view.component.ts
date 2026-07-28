import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({ selector: 'app-input-view', templateUrl: './input-view.component.html' })
export class InputViewComponent {
    constructor(private fb: FormBuilder) {}
    form = this.fb.group({
        destination: ['', Validators.required],
        readonlyValue: ['تهران'],
        disabledValue: [{ value: 'مقدار غیرفعال', disabled: true }],
    });

    code = `<iho-input label="مقصد" size="md" template="floating" type="text" placeholder="نام شهر یا هتل"></iho-input>
<iho-input label="ایمیل" size="lg" template="inline" type="email" [required]="true" hint="ایمیل تایید رزرو"></iho-input>
<iho-input label="جستجو" icon="iho-icon-search" iconClass="text-primary-500"></iho-input>
<iho-input label="نام کاربری" errorInline="این فیلد الزامی است"></iho-input>
<iho-input label="کد تخفیف" successInline="کد معتبر است"></iho-input>
<iho-input label="غیرفعال" [disabled]="true"></iho-input>

<form [formGroup]="form">
  <iho-input formControlName="destination" label="مقصد" [required]="true"></iho-input>
</form>`;
}