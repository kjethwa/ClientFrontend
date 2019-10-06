import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavigationbarComponent} from './sidenavigationbar.component';
import {SessiondetailsComponent} from './sessiondetails/sessiondetails.component';
import {CompletesessionComponent} from './completesession/completesession.component';
import {AllMaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import {AdminService} from './admin.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [{
  path: '', component: SidenavigationbarComponent,
  children: [
    {path: 'start', component: SessionsComponent},
    {path: 'complete', component: CompletesessionComponent},
    {path: 'details', component: SessiondetailsComponent}]
}];

@NgModule({
  declarations: [SidenavigationbarComponent,
  SessiondetailsComponent,
  CompletesessionComponent,
  SessionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllMaterialModule,
    HttpClientModule
  ],
  providers: [AdminService]
})
export class SidenavmoduleModule { }
