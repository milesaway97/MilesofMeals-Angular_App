import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';

@Component({
  selector: 'app-meals-list-edit-meal',
  templateUrl: './meals-list-edit-meal.component.html',
  styleUrls: ['./meals-list-edit-meal.component.css']
})
export class MealsListEditMealComponent implements OnInit {
  meal: BehaviorSubject<Meal> = new BehaviorSubject<Meal>({
    name: "",
    imgSource: "",
    url: "",
    id: "",
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mealService: MealService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.mealService.getMeal(id !).subscribe((meal) => {
      this.meal.next(meal);
    });
  }

  editMeal(meal: Meal) {
    this.mealService.updateMeal(this.meal.value._id || '', meal)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/profile/meals');
        },
        error: (error) => {
          alert('Failed to update meal');
          console.error(error);
        }
      })
  }
}
