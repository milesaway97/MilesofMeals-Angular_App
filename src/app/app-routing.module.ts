import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'search-page', loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule) },
  { path: 'profile-page', loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule) },
  { path: '',
    redirectTo: '',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
