import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({ selector: 'app-input-view', templateUrl: './input-view.component.html' })
export class InputViewComponent {
    constructor(private fb: FormBuilder) {}
    form = this.fb.group({
        itemName: ['', Validators.required],
        readonlyValue: ['تهران'],
        disabledValue: [{ value: 'مقدار غیرفعال', disabled: true }],
    });

    code = `<mytag-input label="عنوان" size="md" template="floating" type="text" placeholder="نام یا شناسه مورد"></mytag-input>
<mytag-input label="ایمیل" size="lg" template="inline" type="email" [required]="true" hint="ایمیل تایید درخواست"></mytag-input>
<mytag-input label="جستجو" icon="iho-icon-search" iconClass="text-primary-500"></mytag-input>
<mytag-input label="نام کاربری" errorInline="این فیلد الزامی است"></mytag-input>
<mytag-input label="کد تخفیف" successInline="کد معتبر است"></mytag-input>
<mytag-input label="غیرفعال" [disabled]="true"></mytag-input>

<form [formGroup]="form">
  <mytag-input formControlName="itemName" label="عنوان" [required]="true"></mytag-input>
</form>`;
}