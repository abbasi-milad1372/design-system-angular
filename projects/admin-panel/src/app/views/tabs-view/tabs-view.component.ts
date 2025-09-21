import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-view',
    templateUrl: './tabs-view.component.html',
})
export class TabsViewComponent { 
    selectedVariant: 'outline' = 'outline';
    selectedSize: 'sm' | 'md'  = 'md';
    showLeftIcon = false;
    showRightIcon = false;
    withBadge = false;
    activeTab = false;
    code = `
      <iho-tab label="محبوب‌ترین" 
      variant="outline" 
      [size]="selectedSize" 
      [active]="activeTab">
            <span icon-left *ngIf="showLeftIcon">👈</span>
            <span icon-right *ngIf="showRightIcon">👉</span>
            <span *ngIf="withBadge" badge
            class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
        </iho-tab>

        <iho-tab label="گشت و گذار" variant="outline" [size]="selectedSize" [active]="activeTab" layout="icon-top"
        [border]="false">
        <span icon-top class="iho-icon-hut text-xl"></span>
        <span *ngIf="withBadge" badge
            class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
    </iho-tab>
    `
}
