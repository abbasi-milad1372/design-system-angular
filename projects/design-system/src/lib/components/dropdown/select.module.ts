import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IhoSelectComponent } from './iho-select.component';
import { IhoOptionComponent } from './iho-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [IhoSelectComponent, IhoOptionComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [IhoSelectComponent, IhoOptionComponent]
})
export class IhoSelectModule { }
