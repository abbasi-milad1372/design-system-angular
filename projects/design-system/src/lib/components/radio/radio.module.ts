import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { IhoRadioGroupComponent } from './radio-group.component';

@NgModule({
    declarations: [RadioComponent, IhoRadioGroupComponent],
    imports: [CommonModule],
    exports: [RadioComponent, IhoRadioGroupComponent],
})
export class IHORadioModule { }
