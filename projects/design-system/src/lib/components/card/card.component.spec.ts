import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';
import { MytagCardModule } from './card.module';

describe('CardComponent actions and image fallback', () => {
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [MytagCardModule, RouterTestingModule] });
        fixture = TestBed.createComponent(CardComponent);
        fixture.componentInstance.type = 'horizontal';
        fixture.detectChanges();
    });

    it('emits the available action and disables the unavailable action', () => {
        const selected = jasmine.createSpy('selected');
        fixture.componentInstance.clickBtnCard.subscribe(selected);
        (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
        expect(selected).toHaveBeenCalledTimes(1);

        fixture.componentInstance.unavailable = true;
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
        expect(button.disabled).toBeTrue();
        button.click();
        expect(selected).toHaveBeenCalledTimes(1);
    });

    it('uses an inline fallback instead of a remote request when an image fails', () => {
        const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;
        image.dispatchEvent(new Event('error'));
        expect(image.src.startsWith('data:image/svg+xml,')).toBeTrue();
        const fallback = image.src;
        image.dispatchEvent(new Event('error'));
        expect(image.src).toBe(fallback);
    });
});
