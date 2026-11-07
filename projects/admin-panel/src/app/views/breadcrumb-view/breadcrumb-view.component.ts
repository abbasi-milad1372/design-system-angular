import { Component } from '@angular/core';

@Component({ selector: 'app-breadcrumb-view', templateUrl: './breadcrumb-view.component.html' })
export class BreadcrumbViewComponent {
    basicItems = [{ name: 'خانه', url: '/' }, { name: 'موارد', url: '/cards' }, { name: 'جزئیات مورد' }];
    shortItems = [{ name: 'خانه', url: '/' }, { name: 'درخواست' }];
}