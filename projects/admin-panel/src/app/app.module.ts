import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { IHOBadgeModule, IHOBreadcrumbModule, IHOBottomsheetModule,IHOButtonModule, IHOCardModule, IHOFooterModule, IHOInputModule, IHONavbarModule, IHOTabModule, IhoCheckboxModule, IHORadioModule, IhoSwitchModule, IhoSelectModule, IHOTooltipModule, IHOAccordionModule } 
from 'design-system';
import { AdminLayoutComponent } from './admin-layout.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeViewComponent } from './views/badge-view/badge-view.component';
import { TabsViewComponent } from './views/tabs-view/tabs-view.component';
import { cardViewComponent } from './views/cards-view/cards-view.component';
import { InputViewComponent } from './views/input-view/input-view.component';
import { IconsViewComponent } from './views/icons-view/icons-view.component';
import { FooterViewComponent } from './views/footer-view/footer-view.component';
import { BreadcrumbViewComponent } from './views/breadcrumb-view/breadcrumb-view.component';
import { NavbarViewComponent } from './views/navbar-view/navbar-view.component';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './views/checkbox-view/checkbox-view.component';
import {RadioViewComponent } from './views/radio-view/radio-view.component';
import { switchComponent } from './views/switch-view/switch-view.component';
import { NOTIFY_DEFAULTS } from 'projects/design-system/src/lib/components/notification/notification.service';
import { NotificationComponent } from 'projects/design-system/src/lib/components/notification/notification.component';
import { dropdownViewComponent } from './views/dropdown-view/dropdown-view.component';
import { tooltipsViewComponent } from './views/tooltips/tooltips-view.component';
import { bottomheetViewComponent } from './views/bottomsheet/bottomsheet-view.component';
import { CustomContentComponent } from './views/bottomsheet/custom-content.component';
import { accordianViewComponent } from './views/accordian/accordian-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'button', component: ButtonViewComponent },
      { path: 'input', component: InputViewComponent },
      { path: 'badge', component: BadgeViewComponent },
      { path: 'tabs', component: TabsViewComponent },
      { path: 'cards', component: cardViewComponent },
      { path: 'icons', component: IconsViewComponent },
      { path: 'footer', component: FooterViewComponent },
      { path: 'breadcrumb', component: BreadcrumbViewComponent },
      { path: 'navbar', component: NavbarViewComponent }, 
      { path: 'checkbox', component: CheckBoxComponent },
      { path: 'radio', component: RadioViewComponent },
      { path: 'switch', component: switchComponent },
      { path: 'dropdown', component: dropdownViewComponent },
      { path: 'tooltips', component: tooltipsViewComponent },
      { path: 'bottomsheet', component: bottomheetViewComponent }, 
      { path: 'accordian', component: accordianViewComponent }, 
    ]
  }
];
@NgModule({
  declarations: [AppComponent,
    AdminLayoutComponent,
    ButtonViewComponent,
    BadgeViewComponent,
    cardViewComponent,
    TabsViewComponent,
    IconsViewComponent,
    FooterViewComponent,
    BreadcrumbViewComponent,
    NavbarViewComponent,
    InputViewComponent,
    CheckBoxComponent,
    RadioViewComponent,
    switchComponent,
    dropdownViewComponent,
    tooltipsViewComponent,
    bottomheetViewComponent,
    CustomContentComponent,
    accordianViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    IHOButtonModule,
    IHOBadgeModule,
    IHOTabModule,
    IHOCardModule,
    IHOFooterModule,
    IHOInputModule,
    IhoCheckboxModule,
    IHORadioModule,
    IhoSwitchModule,
    NotificationComponent,
    IHOBreadcrumbModule,
    IHONavbarModule,
    IhoSelectModule,
    IHOTooltipModule,
    IHOBottomsheetModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    IHOAccordionModule

    
  ],
  bootstrap: [AppComponent],
  providers:[
    {
      provide: NOTIFY_DEFAULTS, useValue: {
        duration: 5000,
        dismissible: true,
        maxStack: 6,
        // position: 'bottom-right',
      }
    },
    
  ]
})
export class AppModule { }
