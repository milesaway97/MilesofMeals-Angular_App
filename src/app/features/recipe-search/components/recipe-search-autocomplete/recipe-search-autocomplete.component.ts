import { Component, OnInit } from '@angular/core';
import {RecipeSearchService} from "../../services/recipe-search.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith } from 'rxjs';
import data from "../../../../core/values/data.json";

@Component({
  selector: 'app-recipe-search-autocomplete',
  templateUrl: './recipe-search-autocomplete.component.html',
  styleUrls: ['./recipe-search-autocomplete.component.css']
})
export class RecipeSearchAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit(): void {
    this.options = this.recipeSearchService.fetchData();

    this.recipeSearchService.setFormControl(this.myControl);

    this.filteredOptions = this.recipeSearchService.valueChanges();
  }

}
