import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealsListComponent} from "./meals-list.component";
import {MealsListRoutingModule} from "./meals-list-routing.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [MealsListComponent],
  imports: [
    CommonModule,
    MealsListRoutingModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  exports: [MealsListComponent]
})
export class MealsListModule { }
