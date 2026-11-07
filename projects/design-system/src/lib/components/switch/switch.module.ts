import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MytagSwitchComponent } from './switch.component';

@NgModule({
    declarations: [MytagSwitchComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [MytagSwitchComponent]
})
export class MytagSwitchModule { }
