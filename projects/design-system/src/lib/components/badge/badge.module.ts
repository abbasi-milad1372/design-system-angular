import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { badgeComponent } from './badge.component';

@NgModule({
    declarations: [badgeComponent],
    imports: [CommonModule],
    exports: [badgeComponent]
})
export class IHOBadgeModule { }
