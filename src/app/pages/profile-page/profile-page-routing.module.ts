import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      { path: '', redirectTo: 'meals', pathMatch: 'full' },
      { path: 'meals', loadChildren: () => import('../../features/meals-list/components/meals-list/meals-list.module').then(m => m.MealsListModule) },
      { path: 'meals/new', loadChildren: () => import('../../features/meals-list/components/meals-list-add-meal/meals-list-add-meal.module')
          .then(m => m.MealsListAddMealModule) },
      { path: 'meals/edit/:id', loadChildren: () => import('../../features/meals-list/components/meals-list-edit-meal/meals-list-edit-meal.module')
          .then(m => m.MealsListEditMealModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
