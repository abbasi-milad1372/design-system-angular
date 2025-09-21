import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox-view',
    templateUrl: './checkbox-view.component.html',
})
export class CheckBoxComponent { 
    similarToBooker = false;
 code = `
    <iho-checkbox
  [(ngModel)]="similarToBooker"
  [label]="'مشابه رزرو کننده'"></iho-checkbox>

    <iho-checkbox  [(ngModel)]="similarToBooker" [disabled]="true" [label]="'مشابه رزرو کننده'"></iho-checkbox>


 `;
}
