import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsListEditMealComponent} from "./meals-list-edit-meal.component";
import { MealsListEditMealRoutingModule} from './meals-list-edit-meal-routing.module'
import {MealFormModule} from "../../../../shared/meal-form/meal-form.module";


@NgModule({
  declarations: [MealsListEditMealComponent],
  imports: [
    CommonModule,
    MealsListEditMealRoutingModule,
    MealFormModule
  ],
  exports: [MealsListEditMealComponent]
})
export class MealsListEditMealModule { }
