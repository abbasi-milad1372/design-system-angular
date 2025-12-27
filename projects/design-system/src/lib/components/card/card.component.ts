import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, inject, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'iho-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    constructor(@Inject(PLATFORM_ID) private pid: Object) { }

    @Input() type: 'hotel' | 'city' | 'distance' = 'hotel';
    @Input() withPrice = false;
    @Input() title = '';
    @Input() titleLeftBody = '';
    @Input() location = '';
    @Input() star = '';
    @Input() rating = '0';
    @Input() reviewCount = '0';
    @Input() price = 0;
    @Input() BoardPrice = 0;
    @Input() tags: string[] = [];
    @Input() tagsAdd: string[] = [];
    @Input() image = '';
    @Input() discount = '0';
    @Input() nights = '1';
    @Input() isAddvertisement = false;
    @Input() isIhoPluse = false;
    @Input() labelBadge = '';
    @Input() capacityCompletion = false;
    @Input()  offerSpecial = false; 
    @Input() linkReserve = '';
    @Output() clickBtnCard = new EventEmitter<any>();
    router = inject(Router);
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
