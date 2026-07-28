import { Component } from '@angular/core';

@Component({ selector: 'app-radio-view', templateUrl: './radio-view.component.html' })
export class RadioViewComponent {
    travelType = 'work';
    code = `<iho-radio-group [(ngModel)]="travelType" name="travelType">
  <iho-radio radioValue="work" label="کاری"></iho-radio>
  <iho-radio radioValue="leisure" label="تفریحی"></iho-radio>
</iho-radio-group>

<iho-radio radioValue="disabled" label="غیرفعال" [disabled]="true"></iho-radio>`;
}