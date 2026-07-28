import { Component } from '@angular/core';

@Component({ selector: 'app-tooltips-view', templateUrl: './tooltips-view.component.html' })
export class tooltipsViewComponent {
    lastEvent = '—';
    onClosed(): void { this.lastEvent = 'closed'; }
    onVisibleChange(value: boolean): void { this.lastEvent = value ? 'visible' : 'hidden'; }

    code = `<ng-template #tooltipContent>
  <span>اطلاعات تکمیلی</span>
</ng-template>

<iho-tooltip [popUpTemplate]="tooltipContent" position="top" [offset]="12" [showArrow]="true">
  <button type="button">نمایش Tooltip</button>
</iho-tooltip>

<iho-tooltip [popUpTemplate]="tooltipContent" position="right" [forcePosition]="true" [delayEnter]="0" [delayLeave]="300" (closed)="onClosed()" (visibleChange)="onVisibleChange($event)">
  <button type="button">بدون تغییر موقعیت</button>
</iho-tooltip>`;
}