import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IhoCheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [IhoCheckboxComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [IhoCheckboxComponent]
})
export class IhoCheckboxModule { }
