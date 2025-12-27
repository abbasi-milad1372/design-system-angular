import { NgModule } from '@angular/core';
import { DesignSystemComponent } from './design-system.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IHOBadgeModule } from './components/badge/badge.module';
import { IHOCardModule } from './components/card/card.module';
import { IHOFooterModule } from './components/footer/footer.module';
import { IHOInputModule } from './components/input/input.module';
import { IHOBreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { IHONavbarModule } from './components/navbar/navbar.module';
import { IhoCheckboxModule } from './components/checkbox/checkbox.module';
import { IHORadioModule } from './components/radio/radio.module';
import { IhoSwitchModule } from './components/switch/switch.module';
import { IhoSelectModule } from './components/dropdown/select.module';
import { IHOTooltipModule } from './components/tooltip/tooltip.module';
import { IHOBottomsheetModule } from './components/bottomsheet/bottomsheet.module';



@NgModule({
  declarations: [
    DesignSystemComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    IHOBadgeModule,
    IHOCardModule,
    IHOFooterModule,
    IHOInputModule,
    IHOBreadcrumbModule,
    IHONavbarModule,
    IhoCheckboxModule,
    IHORadioModule,
    IhoSwitchModule,
    IhoSelectModule,
    IHOTooltipModule,
    IHOBottomsheetModule

  ],
  exports: [
    DesignSystemComponent,
  ]
})
export class DesignSystemModule { }
