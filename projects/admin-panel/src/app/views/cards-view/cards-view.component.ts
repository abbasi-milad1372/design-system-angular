import { Component } from '@angular/core';

@Component({ selector: 'app-card-view', templateUrl: './cards-view.component.html' })
export class cardViewComponent {
    image = 'assets/img/IHO_Design_System_With_Angular.webp';
    lastCardEvent = '—';
    handleCard(event: unknown): void { this.lastCardEvent = event ? 'clicked' : 'clicked'; }

    code = `<iho-card type="hotel" title="هتل داریوش" location="کیش" star="۵" rating="۴.۸" reviewCount="۲۸۸" [price]="11360000" [BoardPrice]="12500000" discount="۱۰" [withPrice]="true" [image]="image">
  <span count-shab>/ شب</span>
</iho-card>

<iho-card type="city" title="اقامتگاه‌های شیراز" location="فارس" [image]="image">
  <ng-container resident>۲۶ اقامتگاه</ng-container>
</iho-card>

<iho-card type="distance" title="هتل نزدیک حرم" location="مشهد" [price]="5400000" [withPrice]="true" labelBadge="۵ دقیقه" [capacityCompletion]="false" (clickBtnCard)="handleCard($event)" [image]="image"></iho-card>

<iho-card title="تبلیغ ویژه" [isAddvertisement]="true" [image]="image">
  <p contentAdd>بهشت پنهان ایران</p>
  <span tagsAdd><iho-badge label="تبلیغات"></iho-badge></span>
</iho-card>`;
}