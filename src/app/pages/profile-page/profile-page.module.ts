import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { MealsListModule } from '../../features/meals-list/components/meals-list/meals-list.module';
import { MealsListAddMealModule } from '../../features/meals-list/components/meals-list-add-meal/meals-list-add-meal.module';
import { MealsListEditMealModule } from '../../features/meals-list/components/meals-list-edit-meal/meals-list-edit-meal.module';
import {MealFormModule} from "../../shared/meal-form/meal-form.module";


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    MealsListModule,
    MealsListAddMealModule,
    MealsListEditMealModule,
    MealFormModule,
  ]
})
export class ProfilePageModule { }
