import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, OnInit } from '@angular/core';
import { WINDOW } from '../../window.module';


@Component({
    selector: 'iho-footer-ds',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    phoneNumber: string = '051-91005105';
    showLinks = false;
    showCollapse = false;
    isMobile: boolean = false;
    expandedSections: { [key: string]: boolean } = {
        section1: true,
        section2: true,
        section3: true
    };

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        @Inject(WINDOW) private windowRef: Window) { }

    ngOnInit() {
        this.checkScreenSize();
    }

    checkScreenSize() {
        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = this.windowRef.innerWidth < 768;
        }
    }

    get cdnUrl(): string {
        return 'https://cdn.iranhotelonline.com';
    }

    toggleSection(section: string) {
        if (this.isMobile) {
            this.expandedSections[section] = !this.expandedSections[section];
        }
    }
}
