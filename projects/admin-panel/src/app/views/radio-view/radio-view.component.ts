import { Component } from '@angular/core';

@Component({ selector: 'app-radio-view', templateUrl: './radio-view.component.html' })
export class RadioViewComponent {
    selection = 'first';
    code = `<mytag-radio-group [(ngModel)]="selection" name="selection">
  <mytag-radio radioValue="first" label="گزینه اول"></mytag-radio>
  <mytag-radio radioValue="second" label="گزینه دوم"></mytag-radio>
</mytag-radio-group>

<mytag-radio radioValue="disabled" label="غیرفعال" [disabled]="true"></mytag-radio>`;
}
