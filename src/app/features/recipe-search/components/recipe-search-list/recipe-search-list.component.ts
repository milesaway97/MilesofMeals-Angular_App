import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RecipeSearchService} from "../../services/recipe-search.service";

@Component({
  selector: 'app-recipe-search-list',
  templateUrl: './recipe-search-list.component.html',
  styleUrls: ['./recipe-search-list.component.css']
})
export class RecipeSearchListComponent implements OnInit {
  filteredOptions: Observable<string[]> | undefined;

  constructor(private recipeSearchService: RecipeSearchService) { }

  ngOnInit(): void {
    this.filteredOptions = this.recipeSearchService.valueChanges();

  }

}
