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
  <iho-button [label]="'ساخت حساب'" [variant]="selectedVariant" [size]="selectedSize" [showLoading]="showloading">
    <span icon-left *ngIf="showLeftIcon">👈</span>
    <span icon-right *ngIf="showRightIcon">👉</span>
</iho-button>
    `;
}
