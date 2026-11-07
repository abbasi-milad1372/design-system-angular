import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID, OnInit } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link.model';
import { WINDOW } from '../../window.module';

export interface FooterFeature {
    title: string;
    description: string;
    imageUrl?: string;
}

export interface FooterSection {
    title: string;
    links: readonly NavigationLink[];
}

export interface FooterContact {
    label: string;
    value: string;
    href?: string;
}

@Component({
    selector: 'mytag-footer-ds',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    private static nextId = 0;
    readonly sectionId = `footer-section-${FooterComponent.nextId++}`;
    @Input() brandName = 'سامانه طراحی';
    @Input() homeUrl = '/';
    @Input() logoUrl: string | null = null;
    @Input() phoneNumber = '';
    @Input() features: readonly FooterFeature[] = [];
    @Input() sections: readonly FooterSection[] = [];
    @Input() contacts: readonly FooterContact[] = [];
    @Input() socialLinks: readonly NavigationLink[] = [];
    @Input() copyright = 'تمام حقوق محفوظ است.';
    @Input() showLinks = false;
    isMobile = false;
    expandedSections: Record<number, boolean> = {};

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        @Inject(WINDOW) private windowRef: Window) { }

    ngOnInit(): void {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    checkScreenSize(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.isMobile = this.windowRef.innerWidth < 768;
        }
    }

    toggleSection(section: number): void {
        if (this.isMobile) {
            this.expandedSections[section] = this.expandedSections[section] === false;
        }
    }
}
