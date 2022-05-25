import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import {
  RecipeSearchAutocompleteModule
} from "../../features/recipe-search/components/recipe-search-autocomplete/recipe-search-autocomplete.module";
import {
  RecipeSearchListModule
} from "../../features/recipe-search/components/recipe-search-list/recipe-search-list.module";


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    RecipeSearchAutocompleteModule,
    RecipeSearchListModule
  ]
})
export class SearchPageModule { }
