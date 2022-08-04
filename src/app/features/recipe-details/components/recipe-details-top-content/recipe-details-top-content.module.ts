import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeDetailsTopContentComponent} from "./recipe-details-top-content.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [RecipeDetailsTopContentComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    RecipeDetailsTopContentComponent
  ]
})
export class RecipeDetailsTopContentModule { }
