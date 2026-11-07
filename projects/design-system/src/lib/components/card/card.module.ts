import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from './card.component';
import { MytagBadgeModule } from "../badge/badge.module";
import { MytagButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MytagBadgeModule, MytagButtonModule, FormsModule, NgOptimizedImage],
    exports: [CardComponent]
})
export class MytagCardModule { }
