import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox-view',
    templateUrl: './checkbox-view.component.html',
})
export class CheckBoxComponent { 
    similarToBooker = false;
 code = `
   <div class="grid grid-cols-1 my-5 w-1/2">
<iho-checkbox [(ngModel)]="similarToBooker" color="black" [label]="'مشابه رزرو کننده'"></iho-checkbox>

</div>
<div class="grid grid-cols-1 my-5 w-1/2">
    <iho-checkbox  [(ngModel)]="similarToBooker" [disabled]="true" [label]="'مشابه رزرو کننده'"></iho-checkbox>

</div>
 `;
}
