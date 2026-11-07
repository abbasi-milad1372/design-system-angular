import { Component } from '@angular/core';

@Component({ selector: 'app-chips-view', templateUrl: './chips-view.component.html' })
export class chipsViewComponent {
    neutralSelected = false;
    primarySelected = true;
    lastAction = '—';
    onRemove(): void { this.lastAction = 'removed'; }
    onAdd(): void { this.lastAction = 'added'; }
    code = `<mytag-chip label="برچسب" size="md" variant="neutral" type="action" [showAdd]="true" [showRemove]="true" (added)="onAdd()" (removed)="onRemove()"></mytag-chip>

<mytag-chip label="فیلتر" size="sm" variant="primary" type="filter" [(selected)]="isSelected" [rounded]="true"></mytag-chip>

<mytag-chip label="غیرفعال" [disabled]="true"></mytag-chip>`;
}