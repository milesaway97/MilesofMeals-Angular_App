import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleSocialLoginComponent} from "./google-social-login.component";

const routes: Routes = [ { path: '', component: GoogleSocialLoginComponent, pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleSocialLoginRoutingModule { }
