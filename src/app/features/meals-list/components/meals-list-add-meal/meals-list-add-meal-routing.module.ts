import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MealsListAddMealComponent} from "./meals-list-add-meal.component";

const routes: Routes = [ { path: '', component: MealsListAddMealComponent, pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsListAddMealRoutingModule { }
