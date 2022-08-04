import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesPageRoutingModule } from './recipes-page-routing.module';
import { RecipesPageComponent } from './recipes-page.component';


@NgModule({
  declarations: [
    RecipesPageComponent
  ],
  imports: [
    CommonModule,
    RecipesPageRoutingModule
  ]
})
export class RecipesPageModule { }
