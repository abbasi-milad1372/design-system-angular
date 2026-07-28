import { Component } from '@angular/core';

@Component({ selector: 'app-tabs-view', templateUrl: './tabs-view.component.html' })
export class TabsViewComponent {
    code = `<iho-tab label="محبوب‌ترین" size="md" [active]="true"></iho-tab>
<iho-tab label="ارزان‌ترین" size="sm" [border]="true"></iho-tab>
<iho-tab label="پیشنهادها" [border]="true" [roundedFull]="true"></iho-tab>
<iho-tab label="تفریحات" layout="icon-top">
  <span icon-top class="iho-icon-hut"></span>
</iho-tab>
<iho-tab label="غیرفعال" [disabled]="true"></iho-tab>`;
}