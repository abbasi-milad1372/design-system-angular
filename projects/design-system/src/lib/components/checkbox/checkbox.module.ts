import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MytagCheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [MytagCheckboxComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [MytagCheckboxComponent]
})
export class MytagCheckboxModule { }
