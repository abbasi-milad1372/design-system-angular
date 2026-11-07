import { Component } from '@angular/core';

@Component({ selector: 'app-checkbox-view', templateUrl: './checkbox-view.component.html' })
export class CheckBoxComponent {
    xsChecked = true;
    smChecked = true;
    mdChecked = true;
    unchecked = false;
    withSupporting = true;
    requiredValue = false;

    code = `<mytag-checkbox size="xs" label="Checkbox 16px"></mytag-checkbox>
<mytag-checkbox size="sm" label="Checkbox 20px"></mytag-checkbox>
<mytag-checkbox size="md" label="Checkbox 24px"></mytag-checkbox>

<mytag-checkbox
  [(ngModel)]="selected"
  size="md"
  color="black"
  label="منو انتخاب کن"
  supportingText="من بهترین انتخاب برای شما هستم در این بخش">
</mytag-checkbox>

<mytag-checkbox label="انتخاب ناقص" [indeterminate]="true"></mytag-checkbox>
<mytag-checkbox label="غیرفعال" [disabled]="true"></mytag-checkbox>`;
}