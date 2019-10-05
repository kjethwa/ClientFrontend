import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavigationbarComponent } from './sidenavigationbar/sidenavigationbar.component';
import {AllMaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavigationbarComponent
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
