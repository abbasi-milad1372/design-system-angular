import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { MytagRadioGroupComponent } from './radio-group.component';

@NgModule({
    declarations: [RadioComponent, MytagRadioGroupComponent],
    imports: [CommonModule],
    exports: [RadioComponent, MytagRadioGroupComponent],
})
export class MytagRadioModule { }
