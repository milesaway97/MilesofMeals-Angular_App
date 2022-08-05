import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSocialLoginRoutingModule } from './google-social-login-routing.module';
import { GoogleSocialLoginComponent } from './google-social-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    GoogleSocialLoginComponent
  ],
  imports: [
    CommonModule,
    GoogleSocialLoginRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('992977825624-jet637j34coeanhf75n4djf98vs0jcuu.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  exports: [GoogleSocialLoginComponent]
})
export class GoogleSocialLoginModule { }
