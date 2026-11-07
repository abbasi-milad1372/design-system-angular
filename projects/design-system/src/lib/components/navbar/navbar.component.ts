import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link.model';

@Component({
    selector: 'mytag-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
    private static nextId = 0;
    readonly menuId = `navigation-menu-${NavbarComponent.nextId++}`;
    @ViewChild('menuTrigger') menuTrigger?: ElementRef<HTMLButtonElement>;
    @Output() onToggleSideNav = new EventEmitter<void>();
    @Output() openDialogModal = new EventEmitter<void>();
    @Input() logoUrl: string | null = null;
    @Input() brandName = 'سامانه طراحی';
    @Input() homeUrl = '/';
    @Input() menuLabel = 'فهرست';
    @Input() menuItems: readonly NavigationLink[] = [];
    @Input() links: readonly NavigationLink[] = [];
    @Input() utilityLinks: readonly NavigationLink[] = [];
    @Input() accountLabel = 'ورود یا ثبت نام';
    showServices = false;
    private closeTimeout?: ReturnType<typeof setTimeout>;

    toggleServices(event: Event): void {
        event.stopPropagation();
        this.cancelClose();
        this.showServices = !this.showServices;
    }

    openServices(): void {
        this.cancelClose();
        this.showServices = true;
    }

    delayedCloseServices(): void {
        this.cancelClose();
        this.closeTimeout = setTimeout(() => this.showServices = false, 200);
    }

    cancelClose(): void {
        clearTimeout(this.closeTimeout);
    }

    @HostListener('document:click')
    closeServices(): void {
        this.cancelClose();
        this.showServices = false;
    }

    closeOnEscape(event: Event): void {
        if (this.showServices) {
            event.stopPropagation();
            this.closeServices();
            this.menuTrigger?.nativeElement.focus();
        }
    }

    ngOnDestroy(): void {
        this.cancelClose();
    }
}
