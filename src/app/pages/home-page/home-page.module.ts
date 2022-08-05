import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { GoogleSocialLoginModule} from "../../features/google-social/components/google-social-login/google-social-login.module";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    GoogleSocialLoginModule,
  ]
})
export class HomePageModule { }
