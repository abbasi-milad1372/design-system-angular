import { Component } from '@angular/core';

@Component({ selector: 'app-tooltips-view', templateUrl: './tooltips-view.component.html' })
export class tooltipsViewComponent {
    lastEvent = '—';
    onClosed(): void { this.lastEvent = 'closed'; }
    onVisibleChange(value: boolean): void { this.lastEvent = value ? 'visible' : 'hidden'; }
}