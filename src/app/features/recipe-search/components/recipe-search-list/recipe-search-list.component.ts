import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Meal} from "../../../../core/interfaces/meal";
import {DataService} from "../../../../core/services/data.service";

@Component({
  selector: 'app-recipe-search-list',
  templateUrl: './recipe-search-list.component.html',
  styleUrls: ['./recipe-search-list.component.css']
})
export class RecipeSearchListComponent implements OnInit {
  filteredOptions: Observable<Meal[]> | undefined;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.filteredOptions = this.dataService.getFilteredOptions();
  }

  onActivate() {
    document.body.scrollTop = 0;
  }

}
