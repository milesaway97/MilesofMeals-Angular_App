import { Injectable } from '@angular/core';
import {UntypedFormControl} from "@angular/forms";
import {Meal} from "../interfaces/meal";
import {from, map, mergeMap, Observable, startWith, Subject, takeUntil} from "rxjs";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myControl = new UntypedFormControl();
  options: Meal[] = [];
  filteredOptions: Observable<Meal[]> | undefined;
  private endSubs$ = new Subject();
  fetchComplete = false;

  constructor(private configService: ConfigService) { }

  fetchData() {
    // https://stackoverflow.com/questions/61087291/multiple-api-calls-with-same-request
    /* ids of all the meals you want to load*/
    const mealIds = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','v','w','y'];

    /* this will emit each id as a value */
    return from(mealIds).pipe(

      /* merge each id to an Observable of the http get request */
      mergeMap(id => this.configService.sendGetRequest(`https://www.themealdb.com/api/json/v1/1/search.php?f=${id}`)),

      /* cancel any pending requests when the components unloads.
        this will avoid any RxJS memory leaks */
      takeUntil(this.endSubs$)
    ).subscribe(
      (result: Meal[]) => {
        /* note that you will only receive 1 character at a time */
        // console.log('received meal', result);
        if (this.options.length == 0) {
          this.options = result;
        } else {
          this.options = this.options.concat(result);
        }
      },
      err => console.log('Error loading a meal', err),
      () => {
        this.options.sort((a,b) => (a.name > b.name) ? 1 : -1);
        this.fetchComplete = true;
        // this.filteredOptions = this.valueChanges()
      },
    );
  }

  getOptions() {
    return this.options;
  }

  //Called by recipe-search-list.components.ts to load the filtered options
  getFilteredOptions() {
    return this.filteredOptions = this.valueChanges();
  }

  setFormControl(myControl: UntypedFormControl) {
    this.myControl = myControl;
  }

  getFormControl() {
    return this.myControl;
  }

  valueChanges() {
    return this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.strMeal)),
      map(strMeal => (strMeal ? this._filter(strMeal) : this.options.slice())),
    );
  }

  private _filter(name: string): Meal[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
