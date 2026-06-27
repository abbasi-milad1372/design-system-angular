import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ChipComponent],
    imports: [CommonModule,FormsModule, ReactiveFormsModule],
    exports: [ChipComponent]
})
export class IHOChipModule { }
