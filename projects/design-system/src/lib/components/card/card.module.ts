import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from './card.component';
import { IHOBadgeModule } from "../badge/badge.module";
import { IHOButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, IHOBadgeModule, IHOButtonModule, FormsModule, NgOptimizedImage],
    exports: [CardComponent]
})
export class IHOCardModule { }
