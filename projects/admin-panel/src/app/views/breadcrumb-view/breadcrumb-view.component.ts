import { Component } from '@angular/core';

@Component({ selector: 'app-breadcrumb-view', templateUrl: './breadcrumb-view.component.html' })
export class BreadcrumbViewComponent {
    basicItems = [{ name: 'خانه', url: '/' }, { name: 'هتل‌ها', url: '/hotels' }, { name: 'جزئیات هتل' }];
    shortItems = [{ name: 'خانه', url: '/' }, { name: 'رزرو' }];
    code = `<iho-breadcrumb [items]="[
  { name: 'خانه', url: '/' },
  { name: 'هتل‌ها', url: '/hotels' },
  { name: 'جزئیات هتل' }
]"></iho-breadcrumb>

<iho-breadcrumb [items]="items" separator="iho-icon-chevron-left"></iho-breadcrumb>`;
}