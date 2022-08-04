import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';

@Component({
  selector: 'app-meals-list-add-meal',
  templateUrl: './meals-list-add-meal.component.html',
  styleUrls: ['./meals-list-add-meal.component.css']
})
export class MealsListAddMealComponent implements OnInit {
  constructor(
    private router: Router,
    private mealService: MealService
  ) { }

  ngOnInit(): void {
  }

  addMeal(meal: Meal) {
    console.log('addMeal()');
    this.mealService.createMeal(meal)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/profile/meals');
        },
        error: (error) => {
          alert("Failed to create meal");
          console.error(error);
        }
      });
  }

}
