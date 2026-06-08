import { Component } from '@angular/core';

@Component({
    selector: 'app-button-view',
    templateUrl: './button-view.component.html',
})
export class ButtonViewComponent { 
    selectedVariant: 'primary' | 'secondary' | 'error' = 'primary';
    selectedSize: 'sm' | 'md' | 'lg' | 'xl' = 'md';
    showLeftIcon = false;
    showRightIcon = false;
    showloading = false;
    code = `
 <iho-button  [variant]="selectedVariant" [size]="selectedSize" [showLoading]="showloading"   [type]="'link'">
    <span label>ساخت حساب</span>
    <span icon-left *ngIf="showLeftIcon">👈</span>
    <span icon-right *ngIf="showRightIcon">👉</span>
</iho-button>
    `;
}
