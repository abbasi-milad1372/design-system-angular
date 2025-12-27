import { NgModule } from '@angular/core';
import { DesignSystemComponent } from './design-system.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DesignSystemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DesignSystemComponent,
  ]
})
export class DesignSystemModule { }
