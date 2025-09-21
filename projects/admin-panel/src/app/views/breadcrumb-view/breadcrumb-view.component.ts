import { Component } from '@angular/core';

@Component({
    selector: 'app-breadcrumb-view',
    templateUrl: './breadcrumb-view.component.html',
})
export class BreadcrumbViewComponent { 

    code =  `<iho-breadcrumb [items]="[
  { label: 'خانه', url: '/' },
  { label: 'پنل کاربر', url: '/dashboard' ,icon: 'iho-icon-arrow-left-01-sharp text-lg font-semi-bold'},
  { label: 'تنظیمات',icon: 'iho-icon-arrow-left-01-sharp text-lg font-semi-bold' }]"></iho-breadcrumb>
    `;    
}
