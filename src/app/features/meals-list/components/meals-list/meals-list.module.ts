import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealsListComponent} from "./meals-list.component";
import {MealsListRoutingModule} from "./meals-list-routing.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
// import { SocialLoginModule } from "@abacritt/angularx-social-login";

@NgModule({
  declarations: [
    MealsListComponent,
    // GoogleSigninButtonDirective,
  ],
  imports: [
    CommonModule,
    MealsListRoutingModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    GoogleSigninButtonModule,
  ],
  exports: [MealsListComponent]
})
export class MealsListModule { }
