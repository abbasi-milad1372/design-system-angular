import { Component } from '@angular/core';

@Component({ selector: 'app-card-view', templateUrl: './cards-view.component.html' })
export class cardViewComponent {
    image = 'assets/img/demo-content.svg';
    actionCount = 0;
    handleCard(event: Event): void {
        this.actionCount++;
    }

    code = `<mytag-card type="standard" title="مجموعه طراحی رابط کاربری"
  [price]="11360000" priceUnit="بسته" [withPrice]="true" [image]="image">
</mytag-card>

<mytag-card type="standard" title="ابزارهای طراحی"
  [price]="7800000" [withPriceDevider]="true" [image]="image">
  <span price-unit>/ بسته</span>
</mytag-card>

<mytag-card type="category" title="منابع آموزشی" [image]="image">
  <ng-container metadata>۲۶ مورد در این دسته</ng-container>
</mytag-card>

<mytag-card type="horizontal" title="مجموعه ابزارها" [price]="5400000"
  priceUnit="بسته" [withPrice]="true" badgeLabel="دسترسی" labelBadge="آنلاین"
  actionLabel="مشاهده جزئیات" [featured]="true"
  (clickBtnCard)="handleCard($event)" [image]="image">
  <span card-badges><mytag-badge label="جدید"></mytag-badge></span>
</mytag-card>

<mytag-card type="horizontal" title="مجموعه آرشیوی" [unavailable]="true"
  unavailableLabel="فعلاً در دسترس نیست" [image]="image"></mytag-card>`;
}
