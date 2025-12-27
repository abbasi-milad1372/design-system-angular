import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { BottomsheetService } from 'design-system';
import { CustomContentComponent } from './custom-content.component';

@Component({
    selector: 'app-bottomsheet',
    templateUrl: './bottomsheet-view.component.html',
})
export class bottomheetViewComponent { 
    isBottomsheetOpen = false;
    isDisabled = false;
    @ViewChild('bottomsheetContainer', { read: ViewContainerRef }) bottomsheetContainer!: ViewContainerRef;
    constructor(private bottomsheetService: BottomsheetService) { }
openBottomsheet() {
    const payload = {
        id: 123,
        name: 'کاربر نمونه',
        details: 'این یک داده نمونه است',
    };

    this.bottomsheetService.open(this.bottomsheetContainer, {
        component: CustomContentComponent,
        data: payload,
        fullHeight: false,
        title: 'اطلاعات کاربر',
        position: 'bottom',
        dir: 'rtl',
        disabled: false,
        iconClass: 'iho-icon-info text-xl', 
    });
    }
   
   
    position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
 code = `
<iho-bottomsheet [position]="position" [title]="'عنوان Bottomsheet'" [isOpen]="isBottomsheetOpen" [disabled]="isDisabled" [dir]="'rtl'"
  (closed)="onBottomsheetClosed()">
<i class="iho-icon-information-circle  text-xl" icon-title></i>
  <p>این یک نمونه محتوای داخل Bottomsheet است.</p>
</iho-bottomsheet>
======================================
ts file:
    openBottomsheet() {
        this.isBottomsheetOpen = true;
    }
    closeBottomsheet() {
        this.isBottomsheetOpen = false;
    }
    onBottomsheetClosed() {
        this.isBottomsheetOpen = false;
    }
    isBottomsheetOpen = false;
    isDisabled = false;
    position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

 `;
}
