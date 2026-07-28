import { Component } from '@angular/core';

@Component({ selector: 'app-checkbox-view', templateUrl: './checkbox-view.component.html' })
export class CheckBoxComponent {
    xsChecked = true;
    smChecked = true;
    mdChecked = true;
    unchecked = false;
    withSupporting = true;
    requiredValue = false;

    code = `<iho-checkbox size="xs" label="Checkbox 16px"></iho-checkbox>
<iho-checkbox size="sm" label="Checkbox 20px"></iho-checkbox>
<iho-checkbox size="md" label="Checkbox 24px"></iho-checkbox>

<iho-checkbox
  [(ngModel)]="selected"
  size="md"
  color="black"
  label="منو انتخاب کن"
  supportingText="من بهترین انتخاب برای شما هستم در این بخش">
</iho-checkbox>

<iho-checkbox label="انتخاب ناقص" [indeterminate]="true"></iho-checkbox>
<iho-checkbox label="غیرفعال" [disabled]="true"></iho-checkbox>`;
}