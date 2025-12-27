import { Component, TemplateRef, ViewChild } from '@angular/core';
@Component({
    selector: 'app-dropdown-view',
    templateUrl: './dropdown-view.component.html',
})
export class dropdownViewComponent { 
    city: any;
    
    code = `
 <iho-select [(ngModel)]="city" placeholder="شهر را انتخاب کنید"
  [searchable]="true"
    [error]="' تایپ خطایی است.'"
    [required]="true">
        <iho-option [value]="'mashhad'" [label]="'مشهد'">مشهد</iho-option>
        <iho-option [value]="'tehran'" [label]="'تهران'">تهران</iho-option>
    </iho-select>
    `
}
