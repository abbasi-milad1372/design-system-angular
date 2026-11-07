import { Component } from '@angular/core';

@Component({ selector: 'app-switch-view', templateUrl: './switch-view.component.html' })
export class switchComponent {
    off = false;
    on = true;
    code = `<mytag-switch [(ngModel)]="notifications" label="دریافت اعلان‌ها"></mytag-switch>
<mytag-switch [(ngModel)]="wallet" label="استفاده از کیف پول" [required]="true"></mytag-switch>
<mytag-switch label="غیرفعال" [disabled]="true"></mytag-switch>`;
}