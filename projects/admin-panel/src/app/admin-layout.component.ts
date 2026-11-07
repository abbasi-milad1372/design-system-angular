import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
    @ViewChild('navigationToggle') navigationToggle?: ElementRef<HTMLButtonElement>;
    mobileNavOpen = false;

    closeNavigation(): void {
        this.mobileNavOpen = false;
    }

    @HostListener('document:keydown.escape')
    closeWithEscape(): void {
        if (this.mobileNavOpen) {
            this.closeNavigation();
            this.navigationToggle?.nativeElement.focus();
        }
    }
    componentsDesignSys = [
        { name: 'معرفی و شروع', path: '/' },
        { name: 'توکن‌های رنگ', path: 'colors' },
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
        { name: 'chips', path: 'chips' },
        { name: 'اعلان‌ها', path: 'notifications' },
    ];
}
