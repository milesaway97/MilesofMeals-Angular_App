import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeSearchAutocompleteComponent } from './recipe-search-autocomplete.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    RecipeSearchAutocompleteComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    RecipeSearchAutocompleteComponent
  ]
})
export class RecipeSearchAutocompleteModule { }
