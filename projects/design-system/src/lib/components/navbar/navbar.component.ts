import { Component, EventEmitter, HostListener, inject, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'iho-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Output() onToggleSideNav = new EventEmitter<void>();
    @Output() openDialogModal = new EventEmitter<void>();
    showServices = false;
    @Input() logoUrl: string | null = '/assets/img/logo-footer.png';

    closeTimeout: any;

    toggleServices(event: Event) {
        event.stopPropagation();
        this.showServices = !this.showServices;
    }

    openServices() {
        clearTimeout(this.closeTimeout);
        this.showServices = true;
    }

    delayedCloseServices() {
        this.closeTimeout = setTimeout(() => {
            this.showServices = false;
        }, 200);
    }

    cancelClose() {
        clearTimeout(this.closeTimeout);
    }
}
