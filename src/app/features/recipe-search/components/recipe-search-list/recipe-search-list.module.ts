import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeSearchListComponent} from "./recipe-search-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [RecipeSearchListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [
    RecipeSearchListComponent
  ]
})
export class RecipeSearchListModule { }
