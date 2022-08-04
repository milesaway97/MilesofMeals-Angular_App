import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealFormComponent} from "./meal-form.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MealFormComponent]
})
export class MealFormModule { }
