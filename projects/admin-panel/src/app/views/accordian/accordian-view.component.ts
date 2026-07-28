import { Component } from '@angular/core';

@Component({ selector: 'app-accordian-view', templateUrl: './accordian-view.component.html' })
export class accordianViewComponent {
    code = `<iho-accordion title="قوانین رزرو" size="md" variant="outline" [expanded]="true">
  <p>محتوای بازشده آکاردئون</p>
</iho-accordion>

<iho-accordion title="سوال متداول" size="sm" variant="filled" [border]="false" [rounded]="true">
  <p>پاسخ سوال متداول</p>
</iho-accordion>

<iho-accordion title="غیرفعال" [disabled]="true"></iho-accordion>`;
}