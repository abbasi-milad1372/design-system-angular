import { Component } from '@angular/core';

@Component({ selector: 'app-chips-view', templateUrl: './chips-view.component.html' })
export class chipsViewComponent {
    neutralSelected = false;
    primarySelected = true;
    lastAction = '—';
    onRemove(): void { this.lastAction = 'removed'; }
    onAdd(): void { this.lastAction = 'added'; }
}