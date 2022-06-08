import { Component, OnInit, DoCheck} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DataService} from "../../../../core/services/data.service";

@Component({
  selector: 'app-recipe-search-autocomplete',
  templateUrl: './recipe-search-autocomplete.component.html',
  styleUrls: ['./recipe-search-autocomplete.component.css']
})
export class RecipeSearchAutocompleteComponent implements OnInit {
  myControl = new FormControl();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.myControl = this.dataService.getFormControl();
    this.myControl.reset();
  }

}
