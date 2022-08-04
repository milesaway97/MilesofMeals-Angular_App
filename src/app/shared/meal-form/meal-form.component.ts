import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../core/interfaces/meal'

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Meal> = new BehaviorSubject<Meal>({
    idMeal: "",
    strArea: "",
    strCategory: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strInstructions: "",
    strMeal: "",
    strMealThumb: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strTags: ""
  });

  @Output()
  formValuesChanged = new EventEmitter<Meal>();

  @Output()
  formSubmitted = new EventEmitter<Meal>();

  mealForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  get idMeal() { return this.mealForm.get('idMeal')!; }
  get strArea() { return this.mealForm.get('strArea')!; }
  get strCategory() { return this.mealForm.get('strCategory')!; }
  get strIngredient1() { return this.mealForm.get('strIngredient1')!; }
  get strIngredient2() { return this.mealForm.get('strIngredient2')!; }
  get strIngredient3() { return this.mealForm.get('strIngredient3')!; }
  get strInstructions() { return this.mealForm.get('strInstructions')!; }
  get strMeal() { return this.mealForm.get('strMeal')!; }
  get strMealThumb() { return this.mealForm.get('strMealThumb')!; }
  get strMeasure1() { return this.mealForm.get('strMeasure1')!; }
  get strMeasure2() { return this.mealForm.get('strMeasure2')!; }
  get strMeasure3() { return this.mealForm.get('strMeasure3')!; }
  get strTags() { return this.mealForm.get('strTags')!; }

  ngOnInit() {
    this.initialState.subscribe(meal => {
      this.mealForm = this.fb.group({
        idMeal: [ meal.idMeal, [Validators.required] ],
        strArea: [ meal.strArea, [ Validators.required] ],
        strCategory: [ meal.strCategory, [Validators.required] ],
        strIngredient1: [ meal.strIngredient1, [Validators.required] ],
        strIngredient2: [ meal.strIngredient2, [Validators.required] ],
        strIngredient3: [ meal.strIngredient3, [Validators.required] ],
        strInstructions: [ meal.strInstructions, [Validators.required] ],
        strMeal: [ meal.strMeal, [Validators.required] ],
        strMealThumb: [ meal.strMealThumb, [Validators.required] ],
        strMeasure1: [ meal.strMeasure1, [Validators.required] ],
        strMeasure2: [ meal.strMeasure2, [Validators.required] ],
        strMeasure3: [ meal.strMeasure3, [Validators.required] ],
        strTags: [ meal.strTags, [Validators.required] ],
      });
    });

    this.mealForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.mealForm.value);
  }
}
