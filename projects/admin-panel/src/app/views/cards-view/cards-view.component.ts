import { Component } from '@angular/core';

@Component({ selector: 'app-card-view', templateUrl: './cards-view.component.html' })
export class cardViewComponent {
    image = 'assets/img/demo-content.svg';
    actionCount = 0;
    handleCard(event: Event): void {
        this.actionCount++;
    }
}
