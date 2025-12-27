import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IHOBottomsheetModule } from 'design-system';

@Component({
    selector: 'app-custom-content',
  
 templateUrl: './custom-content.component.html',
    styles: [
        `
        .custom-content {
            padding: 16px;
            color: var(--color-gray-400);
        }
        h3 {
            font-size: var(--font-medium);
            margin-bottom: 12px;
        }
        p {
            margin: 8px 0;
            font-size: var(--font-small);
        }
        `
    ]
})
export class CustomContentComponent {
    @Input() data: any;
    constructor() { 

        console.log(this.data);
    }
}