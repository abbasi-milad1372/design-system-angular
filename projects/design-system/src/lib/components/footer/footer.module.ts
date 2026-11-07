import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MytagButtonModule } from "../button/button.module";
import { MytagBadgeModule } from '../badge/badge.module';
import { InjectionToken } from '@angular/core';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, MytagButtonModule, MytagBadgeModule, NgOptimizedImage],
    exports: [FooterComponent]
})
export class MytagFooterModule { }

