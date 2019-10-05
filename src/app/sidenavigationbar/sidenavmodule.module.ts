import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavigationbarComponent} from './sidenavigationbar.component';
import {SessiondetailsComponent} from './sessiondetails/sessiondetails.component';
import {CompletesessionComponent} from './completesession/completesession.component';
import {AllMaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import { StartsessionComponent } from './startsession/startsession.component';

const routes: Routes = [{
  path: '', component: SidenavigationbarComponent,
  children: [
    {path: 'start', component: StartsessionComponent},
    {path: 'complete', component: CompletesessionComponent},
    {path: 'details', component: SessiondetailsComponent}]
}];

@NgModule({
  declarations: [SidenavigationbarComponent,
  SessiondetailsComponent,
  CompletesessionComponent,
  StartsessionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllMaterialModule
  ]
})
export class SidenavmoduleModule { }
