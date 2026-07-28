import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BottomsheetService } from 'design-system';
import { CustomContentComponent } from './custom-content.component';

type BottomsheetPosition = 'bottom' | 'top' | 'left' | 'right';

@Component({ selector: 'app-bottomsheet', templateUrl: './bottomsheet-view.component.html' })
export class bottomheetViewComponent {
    @ViewChild('bottomsheetContainer', { read: ViewContainerRef }) bottomsheetContainer!: ViewContainerRef;
    positions: BottomsheetPosition[] = ['bottom', 'top', 'left', 'right'];

    constructor(private bottomsheetService: BottomsheetService) {}

    openBottomsheet(position: BottomsheetPosition, fullHeight = false): void {
        this.bottomsheetService.open(this.bottomsheetContainer, {
            component: CustomContentComponent,
            data: { id: 123, name: 'کاربر نمونه', details: 'داده ارسال‌شده به محتوای سفارشی' },
            title: fullHeight ? 'Bottomsheet تمام‌قد' : `موقعیت ${position}`,
            position,
            dir: 'rtl',
            disabled: false,
            fullHeight,
            iconClass: 'iho-icon-info text-xl',
        });
    }

    code = `@ViewChild('bottomsheetContainer', { read: ViewContainerRef })
bottomsheetContainer!: ViewContainerRef;

openBottomsheet(): void {
  this.bottomsheetService.open(this.bottomsheetContainer, {
    component: CustomContentComponent,
    data: { id: 123 },
    title: 'اطلاعات کاربر',
    position: 'bottom',
    dir: 'rtl',
    fullHeight: false,
    disabled: false,
    iconClass: 'iho-icon-info'
  });
}`;
}