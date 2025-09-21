import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IHOButtonModule } from "../button/button.module";
import { IHOBadgeModule } from '../badge/badge.module';
import { InjectionToken } from '@angular/core';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, IHOButtonModule, IHOBadgeModule, NgOptimizedImage],
    exports: [FooterComponent]
})
export class IHOFooterModule { }

