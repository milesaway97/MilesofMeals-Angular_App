import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsPageComponent } from './recipe-details-page.component';

const routes: Routes = [{ path: '', component: RecipeDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDetailsPageRoutingModule { }
