import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'search', loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule) },
  { path: 'recipes/:id', loadChildren: () => import('./pages/recipe-details-page/recipe-details-page.module').then(m => m.RecipeDetailsPageModule) },
  { path: 'recipes', loadChildren: () => import('./pages/recipes-page/recipes-page.module').then(m => m.RecipesPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
