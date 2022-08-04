import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsListAddMealComponent} from "./meals-list-add-meal.component";
import { MealsListAddMealRoutingModule} from "./meals-list-add-meal-routing.module";
import {MealFormModule} from "../../../../shared/meal-form/meal-form.module";

@NgModule({
  declarations: [MealsListAddMealComponent],
  imports: [
    CommonModule,
    MealsListAddMealRoutingModule,
    MealFormModule
  ],
  exports: [MealsListAddMealComponent]
})
export class MealsListAddMealModule { }
