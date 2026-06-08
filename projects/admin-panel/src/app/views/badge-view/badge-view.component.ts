import { Component } from '@angular/core';

@Component({
    selector: 'app-badge-view',
    templateUrl: './badge-view.component.html',
})
export class BadgeViewComponent { 
    selectedVariant: 'default' | 'primary' | 'warning' | 'error' | 'success' = 'primary';
    selectedSize: 'sm' | 'md' | 'lg' = 'md';
    showLeftIcon = false;
    showRightIcon = false;
    withDot = false;
    withImg = false;
    border = false;
    radius = false;
    code =  `   <iho-badge [border]="border" [radius]="radius"  [size]="selectedSize" label="تست"
            [variant]="selectedVariant">
            <span dot *ngIf="withDot">.</span>
            <span icon-left *ngIf="showLeftIcon" class="iho-icon-hut text-lg"></span>
            <span icon-right *ngIf="showRightIcon" class="iho-icon-hut text-lg"></span>
            <img *ngIf="withImg" img src="https://picsum.photos/16/16" alt="avatar" />
    
        </iho-badge>
    `;    
}
