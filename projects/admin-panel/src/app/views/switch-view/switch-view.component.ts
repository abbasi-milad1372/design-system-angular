import { Component } from '@angular/core';

@Component({ selector: 'app-switch-view', templateUrl: './switch-view.component.html' })
export class switchComponent {
    off = false;
    on = true;
    code = `<iho-switch [(ngModel)]="notifications" label="دریافت اعلان‌ها"></iho-switch>
<iho-switch [(ngModel)]="wallet" label="استفاده از کیف پول" [required]="true"></iho-switch>
<iho-switch label="غیرفعال" [disabled]="true"></iho-switch>`;
}