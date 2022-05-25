import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeSearchListComponent} from "./recipe-search-list.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [RecipeSearchListComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    RecipeSearchListComponent
  ]
})
export class RecipeSearchListModule { }
