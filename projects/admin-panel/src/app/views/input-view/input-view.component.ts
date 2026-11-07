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
}