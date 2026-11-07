import { NgModule } from '@angular/core';
import { DesignSystemComponent } from './design-system.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MytagBadgeModule } from './components/badge/badge.module';
import { MytagCardModule } from './components/card/card.module';
import { MytagFooterModule } from './components/footer/footer.module';
import { MytagInputModule } from './components/input/input.module';
import { MytagBreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { MytagNavbarModule } from './components/navbar/navbar.module';
import { MytagCheckboxModule } from './components/checkbox/checkbox.module';
import { MytagRadioModule } from './components/radio/radio.module';
import { MytagSwitchModule } from './components/switch/switch.module';
import { MytagSelectModule } from './components/dropdown/select.module';
import { MytagTooltipModule } from './components/tooltip/tooltip.module';
import { MytagBottomsheetModule } from './components/bottomsheet/bottomsheet.module';
import { MytagAccordionModule } from './components/accordion/accordion.module';
import { MytagChipModule } from './components/chips/chip.module';



@NgModule({
  declarations: [
    DesignSystemComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    MytagBadgeModule,
    MytagCardModule,
    MytagFooterModule,
    MytagInputModule,
    MytagBreadcrumbModule,
    MytagNavbarModule,
    MytagCheckboxModule,
    MytagRadioModule,
    MytagSwitchModule,
    MytagSelectModule,
    MytagTooltipModule,
    MytagBottomsheetModule,
    MytagAccordionModule,
    MytagChipModule
  ],
  exports: [
    DesignSystemComponent,
  ]
})
export class DesignSystemModule { }
