import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { IHOButtonModule } from "../button/button.module";
import { IHOBadgeModule } from '../badge/badge.module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, IHOButtonModule, IHOBadgeModule, NgOptimizedImage],
    exports: [NavbarComponent]
})
export class IHONavbarModule { }
