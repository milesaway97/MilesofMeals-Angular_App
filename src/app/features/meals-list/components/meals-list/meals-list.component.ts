import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
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
}
