import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subscription} from "rxjs";
import {ConfigService} from "../../core/services/config.service";
import {Meal} from "../../core/interfaces/meal";

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent implements OnInit {
  private routeSub: Subscription | undefined;
  myMeal$: Observable<Meal[]> = new Observable<Meal[]>();
  idMeal: string = "";
  array: Array<number> = new Array<number>(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
  private mealIdURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  constructor(private route: ActivatedRoute,
              private configService: ConfigService) {}

  ngOnInit(): void {
    //Set idMeal to the id in the url
    this.routeSub = this.route.params.subscribe(params => {
      this.idMeal = params['id'].substring(0,5);
    });

    this.myMeal$ = this.getMealById(this.idMeal);
  }

  //Sends get request for the specified meal, returning observable
  getMealById(id: string): Observable<Meal[]> {
    return this.configService.sendGetRequest(this.mealIdURL + id);
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }
}
