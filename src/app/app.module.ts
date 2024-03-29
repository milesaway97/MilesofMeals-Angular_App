import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule} from "@angular/material/grid-list";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { HeaderNavbarModule} from "./features/header/components/header-navbar/header-navbar.module";
import { HeaderTitleModule} from "./features/header/components/header-title/header-title.module";
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  // GoogleSigninButtonDirective,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HeaderNavbarModule,
        HeaderTitleModule,
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
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      },
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
