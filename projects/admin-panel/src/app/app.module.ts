import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { IHOButtonModule } from 'design-system'; 
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'button', component: ButtonViewComponent },
    ]
  }
];
@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, ButtonViewComponent],
  imports: [
    BrowserModule,
    IHOButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
