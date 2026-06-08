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
     <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 items-center">
    <label class="flex flex-col gap-1">
        Size:
        <select [(ngModel)]="selectedSize" class="border p-2 rounded">
            <option value="sm">Small</option>
            <option value="md">Medium</option>
        </select>
    </label>

    <label class="flex items-center gap-2">
        <input type="checkbox" [(ngModel)]="showLeftIcon" />
        نمایش آیکن چپ
    </label>

    <label class="flex items-center gap-2">
        <input type="checkbox" [(ngModel)]="showRightIcon" />
        نمایش آیکن راست
    </label>


    <label class="flex items-center gap-2">
        <input type="checkbox" [(ngModel)]="withBadge" />
        with Badge
    </label>
    <label class="flex items-center gap-2">
        <input type="checkbox" [(ngModel)]="activeTab" />
        active
    </label>
</div>

<div class="flex my-5">
    <div class="mx-2">
        <iho-tab label="محبوب‌ترین" variant="outline" [size]="selectedSize" [active]="activeTab">
            <span icon-left *ngIf="showLeftIcon">👈</span>
            <span icon-right *ngIf="showRightIcon">👉</span>
            <span *ngIf="withBadge" badge
                class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
        </iho-tab>
    </div>
    <div class="mx-2">
        <iho-tab label="ارزان‌ترین" variant="outline" [size]="selectedSize" [active]="activeTab">
            <span icon-left *ngIf="showLeftIcon">👈</span>
            <span icon-right *ngIf="showRightIcon">👉</span>
            <span *ngIf="withBadge" badge
                class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
        </iho-tab>
    </div>



</div>
<div class="flex my-5">
    <div class="mx-2">
        <iho-tab label="محبوب‌ترین" variant="outline" [size]="selectedSize" [active]="activeTab" [border]="true">
            <span icon-left *ngIf="showLeftIcon">👈</span>
            <span icon-right *ngIf="showRightIcon">👉</span>
            <span *ngIf="withBadge" badge
                class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
        </iho-tab>
    </div>
    <div class="mx-2">
        <iho-tab label="ارزان‌ترین" variant="outline" [size]="selectedSize" [active]="activeTab" [border]="true"
            [roundedFull]="true">
            <span icon-left *ngIf="showLeftIcon">👈</span>
            <span icon-right *ngIf="showRightIcon">👉</span>
            <span *ngIf="withBadge" badge
                class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
        </iho-tab>
    </div>



</div>
<div class="mx-2 w-full border-t pt-2">
    <iho-tab label="گشت و گذار" variant="outline" [size]="selectedSize" [active]="activeTab" layout="icon-top"
        [border]="false">
        <span icon-top class="iho-icon-hut text-xl"></span>
        <span *ngIf="withBadge" badge
            class="ml-2 bg-green-500 text-black px-2 py-0.5 rounded-4xl left-[-20px] top-[-15px] text-xs absolute">جدید</span>
    </iho-tab>
</div>
    `
}
