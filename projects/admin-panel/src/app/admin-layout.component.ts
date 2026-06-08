import { Component, inject } from '@angular/core';
import { NotificationService } from 'projects/design-system/src/lib/components/notification/notification.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
    notify = inject(NotificationService);
    constructor() {
        this.notify.success('', 'رزرو با موفقیت ثبت شد.', { duration: 50000,position:'bottom-right' });

    }
    componentsDesignSys = [
        { name: 'Button', path: 'button' },
        { name: 'Input', path: 'input' },
        { name: 'badge', path: 'badge' },
        { name: 'Card', path: 'cards' },
        { name: 'tabs', path: 'tabs' },
        { name: 'icons', path: 'icons' },
        { name: 'footer', path: 'footer' },
        { name: 'navbar', path: 'navbar' }, 
        { name: 'breadcrumb', path: 'breadcrumb' },
        { name: 'checkbox', path: 'checkbox' },
        { name: 'radio', path: 'radio' },
        { name: 'switch', path: 'switch' },
        { name: 'dropdown', path: 'dropdown' },
        { name: 'tooltips', path: 'tooltips' },
        { name: 'bottomSheet', path: 'bottomsheet' },
        { name: 'accordian', path: 'accordian' },
    ];
}
