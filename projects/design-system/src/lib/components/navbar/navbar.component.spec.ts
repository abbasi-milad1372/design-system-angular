import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { MytagNavbarModule } from './navbar.module';

describe('NavbarComponent disclosure', () => {
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [MytagNavbarModule] });
        fixture = TestBed.createComponent(NavbarComponent);
        fixture.componentInstance.menuItems = [{ label: 'نمونه', href: '/sample' }];
        fixture.detectChanges();
    });

    it('closes with Escape and restores focus to its trigger', () => {
        const trigger = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
        trigger.click();
        fixture.detectChanges();
        const panel = fixture.nativeElement.querySelector('#' + fixture.componentInstance.menuId) as HTMLElement;
        expect(panel.querySelector('a')?.getAttribute('href')).toBe('/sample');
        panel.querySelector('a')?.focus();
        panel.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        fixture.detectChanges();
        expect(trigger.getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(trigger);
    });

    it('dismisses an open disclosure on an outside click', () => {
        const trigger = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
        trigger.click();
        fixture.detectChanges();
        document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        fixture.detectChanges();
        expect(trigger.getAttribute('aria-expanded')).toBe('false');
    });
});
