import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytagSelectComponent } from './iho-select.component';
import { MytagOptionComponent } from './iho-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [MytagSelectComponent, MytagOptionComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [MytagSelectComponent, MytagOptionComponent]
})
export class MytagSelectModule { }
