import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './recipes-page.component';
import {RecipeDetailsPageComponent} from "../recipe-details-page/recipe-details-page.component";

const routes: Routes = [
  { path: '', component: RecipesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesPageRoutingModule { }
