import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MealsListComponent} from "./meals-list.component";

const routes: Routes = [ { path: '', component: MealsListComponent, pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsListRoutingModule { }
