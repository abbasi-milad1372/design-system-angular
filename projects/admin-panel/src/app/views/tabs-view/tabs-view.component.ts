import { Component } from '@angular/core';

@Component({ selector: 'app-tabs-view', templateUrl: './tabs-view.component.html' })
export class TabsViewComponent {
    code = `<mytag-tab label="محبوب‌ترین" size="md" [active]="true"></mytag-tab>
<mytag-tab label="ارزان‌ترین" size="sm" [border]="true"></mytag-tab>
<mytag-tab label="پیشنهادها" [border]="true" [roundedFull]="true"></mytag-tab>
<mytag-tab label="تفریحات" layout="icon-top">
  <span icon-top class="iho-icon-hut"></span>
</mytag-tab>
<mytag-tab label="غیرفعال" [disabled]="true"></mytag-tab>`;
}