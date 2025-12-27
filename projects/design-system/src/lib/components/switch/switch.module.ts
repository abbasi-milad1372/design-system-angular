import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IhoSwitchComponent } from './switch.component';

@NgModule({
    declarations: [IhoSwitchComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [IhoSwitchComponent]
})
export class IhoSwitchModule { }
