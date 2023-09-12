import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../core/interfaces/meal'
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Meal> = new BehaviorSubject<Meal>({
    name: "",
    imgSource: "",
    url: "",
    id: "",
  });

  @Output()
  formValuesChanged = new EventEmitter<Meal>();

  @Output()
  formSubmitted = new EventEmitter<Meal>();

  mealForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder,
              private userService: UserService) { }

  get name() { return this.mealForm.get('name')!; }
  get imgSource() { return this.mealForm.get('imgSource')!; }
  get url() { return this.mealForm.get('url')!; }
  get id() { return this.mealForm.get('id')!; }

  ngOnInit() {
    this.initialState.subscribe(meal => {
      this.mealForm = this.fb.group({
        name: [ meal.name, [Validators.required] ],
        imgSource: [ meal.imgSource, [ Validators.required] ],
        url: [ meal.url, [Validators.required] ],
        id: [ this.userService.getCurrUser().id, [Validators.required] ],
      });
    });

    this.mealForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  submitForm() {
    this.formSubmitted.emit(this.mealForm.value);
  }
}
