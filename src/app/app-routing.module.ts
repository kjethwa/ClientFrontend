import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

// tslint:disable-next-line:max-line-length
const routes: Routes = [{path: 'session' , component: AppComponent, children: [{path: '', loadChildren: './sidenavigationbar/sidenavmodule.module#SidenavmoduleModule'}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
