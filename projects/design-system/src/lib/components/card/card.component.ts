import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, ContentChild, EventEmitter, inject, Inject, Input, Output, PLATFORM_ID, signal, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

export type CardType = 'standard' | 'category' | 'horizontal';

@Component({
    selector: 'mytag-card',
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
    

    @Input() type: CardType = 'standard';
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
    @Input() priceUnit = '';
    @Input() isAddvertisement = false;
    @Input() featured = false;
    @Input() featuredLabel = 'ویژه';
    @Input() labelBadge = '';
    @Input() badgeLabel = 'اطلاعات';
    @Input() unavailable = false;
    @Input() actionLabel = 'مشاهده جزئیات';
    @Input() unavailableLabel = 'ناموجود';
    @Input() letMeKnow = false;
    @Input() actionLink = '';
    @Input() fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"%3E%3Crect width="320" height="200" fill="%23f3f4f6"/%3E%3Cpath d="m60 150 60-60 40 40 40-50 60 70Z" fill="%239ca3af"/%3E%3C/svg%3E';
    @Input() promotions = false;
    @Input() currency = false;
    @Input() showPromotions = false;
   
    @Output() clickBtnCard = new EventEmitter<Event>();
    router = inject(Router);
    readonly isBrowser = isPlatformBrowser(this.pid);
    
    get isStandard(): boolean {
        return this.type === 'standard';
    }

    get isCategory(): boolean {
        return this.type === 'category';
    }


    onImageError(event: Event) {
        if (!isPlatformBrowser(this.pid)) return;

        const img = event.target as HTMLImageElement;
        if (this.fallbackImage && img.getAttribute('src') !== this.fallbackImage) {
            img.src = this.fallbackImage;
        }
    }
    handleBtn(event: Event) {
        if (!this.unavailable) {
            this.clickBtnCard.emit(event);
        }
    }
    navigateTo(link: string) {
        this.router.navigate([link])
    }
}
