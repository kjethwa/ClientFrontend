import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavigationbarComponent} from './sidenavigationbar.component';
import {SessiondetailsComponent} from './sessiondetails/sessiondetails.component';
import {AllMaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import {AdminService} from './admin.service';
import {HttpClientModule} from '@angular/common/http';
import { TokenInfoComponent } from './token-info/token-info.component';
import { ActivesessionComponent } from './activesession/activesession.component';

const routes: Routes = [{
  path: '', component: SidenavigationbarComponent,
  children: [
    {path: 'active', component: ActivesessionComponent},
    {path: 'start', component: SessionsComponent},
    {path: 'details', component: SessiondetailsComponent},
    {path: 'tokeninfo/:sessionId', component: TokenInfoComponent}]
}];

@NgModule({
  declarations: [SidenavigationbarComponent,
  SessiondetailsComponent,
  SessionsComponent,
  TokenInfoComponent,
  ActivesessionComponent,
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
