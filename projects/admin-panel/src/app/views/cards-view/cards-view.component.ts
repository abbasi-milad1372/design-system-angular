import { Component } from '@angular/core';

@Component({
    selector: 'app-card-view',
    templateUrl: './cards-view.component.html',
})
export class cardViewComponent { 

    code =`
// type = hotel | city
<iho-card 
[title]="'هتل داریوش'" 
[location]="'کیش، هرمزگان'" 
[rating]="'4.4'" [reviewCount]="'288'"
[price]="'11360000'"
[type]="'hotel'"
[withPrice]="true"
[discount]="'100'"
[image]="'https://picsum.photos/300/196'">
    <div tags class="flex gap-2">
        <iho-badge [label]="'از 2 میلیون تومان'" [size]="'sm'" [variant]="'primary'" [radius]="true">
            <span icon-right>👉</span>
        </iho-badge>
        <iho-badge [border]="false" [radius]="true" [label]="'2.3 کیلومتر (18 دقیقه)'" [size]="'sm'"
            [variant]="'primary'">
            <span icon-right>👉</span>
        </iho-badge>
    </div>
    <span count-shab class="text-small font-medium text-gray-300 ml-1">1 شب</span>
    <span count-person class="text-small font-medium text-gray-300 mx-1">1 بزرگسال</span>
</iho-card>

<iho-card 
[title]="'هتل داریوش'" 
[location]="'کیش، هرمزگان'" 
[type]="'city'"
[image]="'https://picsum.photos/300/196'">
    <span tags class="flex gap-2">
        <iho-badge [border]="false" [radius]="true" [label]="'2.3 کیلومتر (18 دقیقه)'" [size]="'sm'"
            [variant]="'primary'">
            <span icon-right>👉</span>
        </iho-badge>
    </span>
    <ng-container resident>
        <span class="mx-1">26</span>
        <span>واحد اقامتی اطراف این مکان</span>
    </ng-container> 
        
</iho-card>
    `
    handleUrl(event: any) {
        console.log('data',event);
    }
 
}
