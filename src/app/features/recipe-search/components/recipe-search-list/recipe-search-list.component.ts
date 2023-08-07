import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Meal} from "../../../../core/interfaces/meal";
import {DataService} from "../../../../core/services/data.service";
import {MealService} from "../../../../core/services/meal.service";

@Component({
  selector: 'app-recipe-search-list',
  templateUrl: './recipe-search-list.component.html',
  styleUrls: ['./recipe-search-list.component.css']
})
export class RecipeSearchListComponent implements OnInit {
  meals$: Observable<Meal[]> = new Observable();

  constructor(private mealsService: MealService) { }

  ngOnInit(): void {
    this.fetchMeals();
  }

  deleteMeal(id: string): void {
    this.mealsService.deleteMeal(id).subscribe({
      next: () => this.fetchMeals()
    });
  }

  private fetchMeals(): void {
    this.meals$ = this.mealsService.getMeals();
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onActivate() {
    document.body.scrollTop = 0;
  }

}
