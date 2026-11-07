import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW } from '../../window.module';
import { FooterComponent } from './footer.component';
import { IHOFooterModule } from './footer.module';

describe('FooterComponent responsive sections', () => {
    let fixture: ComponentFixture<FooterComponent>;
    let viewport: { innerWidth: number };

    beforeEach(() => {
        viewport = { innerWidth: 375 };
        TestBed.configureTestingModule({
            imports: [IHOFooterModule],
            providers: [{ provide: WINDOW, useValue: viewport }]
        });
        fixture = TestBed.createComponent(FooterComponent);
        fixture.componentInstance.sections = [{ title: 'راهنما', links: [{ label: 'نمونه', href: '/sample' }] }];
        fixture.detectChanges();
    });

    it('collapses on mobile and reveals the links after resizing to desktop', () => {
        const trigger = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
        const links = fixture.nativeElement.querySelector('.footer__nav-list') as HTMLElement;
        trigger.click();
        fixture.detectChanges();
        expect(links.hidden).toBeTrue();
        expect(trigger.getAttribute('aria-expanded')).toBe('false');

        viewport.innerWidth = 1280;
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        expect(links.hidden).toBeFalse();
        expect(trigger.disabled).toBeTrue();
        expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });

    it('does not render contact or certification data supplied by another application', () => {
        expect(fixture.nativeElement.querySelector('.footer__contact-info').textContent.trim()).toBe('');
        expect(fixture.nativeElement.querySelector('.footer__certificates img')).toBeNull();
    });
});
