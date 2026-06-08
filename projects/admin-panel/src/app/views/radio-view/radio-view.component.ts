import { Component } from '@angular/core';

@Component({
    selector: 'app-radio-view',
    templateUrl: './radio-view.component.html',
})
export class RadioViewComponent { 
    similarToBooker = false;
 code = `


<div class="grid grid-cols-1 my-5 w-1/2">
<iho-radio   [radioValue]="'booker'" [label]="'مشابه رزرو کننده'">
</iho-radio>
</div>
<div class="grid grid-cols-1 my-5 w-1/2">
<iho-radio   [radioValue]="'guest'" [label]="'مهمان'" [disabled]="true">
</iho-radio>
  <iho-radio-group formControlName="travelType" name="travelType">
    <iho-radio [radioValue]="'WORK'" label="بله" [checked]="true"></iho-radio>
    <iho-radio [radioValue]="'PLEASURE'" label="خیر"></iho-radio>
  </iho-radio-group>
</div>
 `;
}
