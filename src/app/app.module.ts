import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavigationbarComponent } from './sidenavigationbar/sidenavigationbar.component';
import {AllMaterialModule} from './material/material.module';
import { SessiondetailsComponent } from './sessiondetails/sessiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavigationbarComponent,
    SessiondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
