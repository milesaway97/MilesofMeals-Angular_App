import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MealsListEditMealComponent} from "./meals-list-edit-meal.component";

const routes: Routes = [ { path: '', component: MealsListEditMealComponent, pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsListEditMealRoutingModule { }
