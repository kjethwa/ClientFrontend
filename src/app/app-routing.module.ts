import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidenavigationbarComponent} from './sidenavigationbar/sidenavigationbar.component';

const routes: Routes = [{path: '' , component: SidenavigationbarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
