import { Component, inject } from '@angular/core';
import { NotificationService } from 'projects/design-system/src/lib/components/notification/notification.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
    notify = inject(NotificationService);
    constructor() {
        this.notify.error('', 'رزرو با موفقیت ثبت شد.', { duration: 5000 });

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

    ];
}
