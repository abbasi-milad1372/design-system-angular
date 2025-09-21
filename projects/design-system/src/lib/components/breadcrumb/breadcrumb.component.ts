import { Component, Input } from '@angular/core';
export interface BreadcrumbItem {
    name: string;
    url?: string; // اگر نبود، به عنوان متن ساده نمایش داده می‌شود
}
@Component({
    selector: 'iho-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})


export class BreadcrumbComponent {
    @Input() items: BreadcrumbItem[] = [];
    @Input() separator: string = 'iho-icon-arrow-left-01-sharp'; // یا می‌تونی آیکن بدی

}
