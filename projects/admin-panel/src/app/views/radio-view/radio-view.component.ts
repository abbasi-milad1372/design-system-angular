import { Component } from '@angular/core';

@Component({
    selector: 'app-radio-view',
    templateUrl: './radio-view.component.html',
})
export class RadioViewComponent { 
    similarToBooker = false;
 code = `
<iho-radio   [radioValue]="'booker'" [label]="'مشابه رزرو کننده'">

<iho-radio   [radioValue]="'guest'" [label]="'مهمان'" [disabled]="true">


 `;
}
