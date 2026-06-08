import { Component } from '@angular/core';

@Component({
    selector: 'app-card-view',
    templateUrl: './cards-view.component.html',
})
export class cardViewComponent { 

    code =`
<div class="grid grid-cols-1 md:grid-cols-5 gap-2 mb-6 items-center">
    <iho-card [title]="'هتل داریوش'" [location]="'کیش، هرمزگان'" [rating]="'4.4'" [star]="'4'" [reviewCount]="'288'"
        [BoardPrice]="11360000" [price]="11360000" [tags]="'xasxsaxs'" [type]="'hotel'" [withPrice]="false"
        [isIhoPluse]="false" [discount]="'0'" [image]="'assets/img/IHO_Design_System_With_Angular.webp'"
        [promotions]="true">

        <ng-template #promotions>
            <div class="flex items-center justify-center gap-2">
                <span class="iho-icon-hot-price text-xl text-error-500"></span>
                <span class="text-error-500 text-sm leading-7">
                    <b>100 هزار تومان تخفیف</b>
                    برای شما
                </span>
            </div>
        </ng-template>

        <span count-shab class="text-small font-medium text-gray-300"> / شب</span>
        <!-- <span count-person class="text-small font-medium text-gray-300 mx-1">1 بزرگسال</span> -->
    </iho-card>
    <iho-card [title]="'هتل داریوش'" [location]="'کیش، هرمزگان'" [rating]="'4.4'" [reviewCount]="'288'"
        [BoardPrice]="100" [price]="11360000" [type]="'hotel'" [withPrice]="true" [discount]="'5'"
        [image]="'assets/img/IHO_Design_System_With_Angular.webp'">

        <span count-shab class="text-small font-medium text-gray-300"> / شب</span>
        <span tags class="flex gap-2">
            <iho-badge [border]="false" [radius]="true" [label]="'نزدیک مترو'" [size]="'sm'" [variant]="'primary'">

            </iho-badge>
        </span>
    </iho-card>
    <iho-card [title]="'هتل داریوش'" [location]="'کیش، هرمزگان'" [type]="'city'"
        [image]="'assets/img/IHO_Design_System_With_Angular.webp'">
        <span tags class="flex gap-2">
            <iho-badge [border]="false" [radius]="true" [label]="'نزدیک مترو'" [size]="'sm'" [variant]="'primary'">

            </iho-badge>
        </span>
        <ng-container resident>
            <span class="mx-1">26</span>
            <span>واحد اقامتی اطراف این مکان</span>
        </ng-container>

    </iho-card>

    <iho-card [title]="'هتل داریوش'" [isAddvertisement]="true"
        [image]="'assets/img/IHO_Design_System_With_Angular.webp'">

        <p class="text-small text-gray-400 font-medium" contentAdd>
            بهشت پنهان ایران
        </p>
        <span tagsAdd class="flex gap-2">
            <iho-badge [border]="false" [radius]="true" [label]="'بنر تبلیغاتی'" [size]="'sm'" [variant]="'primary'">
                <span icon-right class="iho-icon-insert-top-image1 text-sm"></span>
            </iho-badge>
        </span>

    </iho-card>
</div>
<div class="grid grid-cols-1 my-5 lg:w-[70%] w-full">
    <iho-card [title]="'هتل هتل هتل داریوش'" [isAddvertisement]="false" [isIhoPluse]="true" [BoardPrice]="11360000"
        [price]="11360000" [star]="'4'" [offerSpecial]="false" [capacityCompletion]="false"
        (clickBtnCard)="handleUrl($event)" [location]="'کیش، هرمزگان'" [rating]="'4.4'" [promotions]="true"
        [reviewCount]="'288'" [withPrice]="true" [type]="'distance'" [discount]="'0'"
        [image]="'assets/img/IHO_Design_System_With_Angular.webp'">

        <ng-template #promotions>
            <div class="flex items-center gap-2">
                <span class="iho-icon-hot-price text-xl text-error-500"></span>
                <span class="text-error-500 text-sm leading-7">
                    <b>100 هزار تومان تخفیف</b>
                    برای شما
                </span>
            </div>
        </ng-template>

        <span distance-badges class="lg:flex gap-[6px] items-end hidden">
            <iho-badge *ngFor="let item of [1,2,3,4,5,6,7]" [border]="true" [radius]="true" [label]="' نوساز'"
                [size]="'sm'">
            </iho-badge>
        </span>
        <span distance-badges-mobile class="lg:hidden gap-1 items-end flex my-1">
            <iho-badge [border]="true" [radius]="true" [label]="' اتاق ساعتی'" [size]="'sm'"
                [variant]="'default'"></iho-badge>
            <iho-badge [border]="true" [radius]="true" [label]="' نوساز'" [size]="'sm'"
                [variant]="'default'"></iho-badge>
        </span>

    </iho-card>

</div>

    `
    handleUrl(event: any) {
        console.log('data',event);
    }
 
}
