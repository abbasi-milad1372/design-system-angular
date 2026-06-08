import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, ContentChild, EventEmitter, inject, Inject, Input, Output, PLATFORM_ID, signal, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'iho-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    resetPromotions = signal(true);
    constructor(@Inject(PLATFORM_ID) private pid: Object) {
        afterNextRender(() => {
            this.resetPromotions.set(false);
            setTimeout(() => this.resetPromotions.set(true), 0);
        });
    }

    @ContentChild('promotions') promotionTemplate!: TemplateRef<any>;
    @ContentChild('currency') currencyTemplate!: TemplateRef<any>;
    

    @Input() type: 'hotel' | 'city' | 'distance' = 'hotel';
    @Input() withPriceDevider = false;
    @Input() withPrice = false;

    @Input() title = '';
    @Input() titleLeftBody = '';
    @Input() location = '';
    @Input() star = '';
    @Input() rating = '';
    @Input() reviewCount = '';
    @Input() price = 0;
    @Input() BoardPrice = 0;
    @Input() tags: string = '';
    @Input() tagsAdd: string[] = [];
    @Input() image = '';
    @Input() discount = '0';
    @Input() nights = '';
    @Input() isAddvertisement = false;
    @Input() isIhoPluse = false;
    @Input() labelBadge = '';
    @Input() capacityCompletion = false;
    @Input()  offerSpecial = false; 
    @Input() linkReserve = '';
    @Input() promotions = false;
    @Input() currency = false;
    @Input() showPromotions = false;
   
    @Output() clickBtnCard = new EventEmitter<any>();
    router = inject(Router);
    readonly isBrowser = isPlatformBrowser(this.pid);
    
    get isHotel(): boolean {
        return this.type === 'hotel';
    }

    get isCity(): boolean {
        return this.type === 'city';
    }


    onImageError(event: Event) {
        if (!isPlatformBrowser(this.pid)) return;

        const img = event.target as HTMLImageElement;
        if (img.src !== 'https://cdn.iranhotelonline.com/images/no-image.jpg') {
            img.src = 'https://cdn.iranhotelonline.com/images/no-image.jpg';
        }
    }
    handleBtn(event: Event) {
        this.clickBtnCard.emit(event);
    }
    navigateTo(link: string) {
        this.router.navigate([link])
    }
}
