import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Meal} from "../../../../core/interfaces/meal";

@Component({
  selector: 'app-recipe-details-top-content',
  templateUrl: './recipe-details-top-content.component.html',
  styleUrls: ['./recipe-details-top-content.component.css']
})
export class RecipeDetailsTopContentComponent implements OnInit {

  constructor() { }

  @Input()
    //Input myMeal$ from recipe-details-page
    myMeal$? : Observable<Meal[]>;

  ngOnInit(): void {
    this.myMeal$?.pipe().subscribe((result: Meal[]) => {
      console.log(result)
    })
  }

}
