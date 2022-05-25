import { Injectable } from '@angular/core';
import data from "../../../core/values/data.json";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  fetchData = () => {
    for (let item of data) {
      this.options.push(item.name);
    }
    return this.options;
  }

  setFormControl = (myControl: FormControl) => {
    this.myControl = myControl;
  }

  valueChanges = () => {
    return this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
      }),
    );
  }

  constructor() { }
}
