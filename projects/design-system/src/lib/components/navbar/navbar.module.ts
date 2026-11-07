import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MytagButtonModule } from "../button/button.module";
import { MytagBadgeModule } from '../badge/badge.module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, MytagButtonModule, MytagBadgeModule, NgOptimizedImage],
    exports: [NavbarComponent]
})
export class MytagNavbarModule { }
