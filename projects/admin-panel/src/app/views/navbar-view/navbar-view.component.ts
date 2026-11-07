import { Component } from '@angular/core';
import { NavigationLink } from '@iho/design-system';

@Component({
    selector: 'app-navbar-view',
    templateUrl: './navbar-view.component.html',
})
export class NavbarViewComponent {
    menuItems: NavigationLink[] = [
        { label: 'کامپوننت‌ها', href: '/cards' },
        { label: 'آیکن‌ها', href: '/icons' },
        { label: 'فرم‌ها', href: '/input' },
    ];
    links: NavigationLink[] = [{ label: 'راهنما', href: '/accordian' }];
    utilityLinks: NavigationLink[] = [{ label: 'اعلان‌ها', href: '/bottomsheet', icon: 'iho-icon-message-multiple-02' }];
    lastAction = 'هنوز رویدادی ثبت نشده است.';

    code = `<mytag-navbar brandName="پروژه نمونه" homeUrl="/" menuLabel="بخش‌ها"
  [menuItems]="menuItems" [links]="links" [utilityLinks]="utilityLinks"
  (onToggleSideNav)="lastAction = 'فهرست کناری'"
  (openDialogModal)="lastAction = 'حساب کاربری'">
</mytag-navbar>`;
}
