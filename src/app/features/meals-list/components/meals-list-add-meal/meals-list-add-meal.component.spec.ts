import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsListAddMealComponent } from './meals-list-add-meal.component';

describe('MealsListAddMealComponent', () => {
  let component: MealsListAddMealComponent;
  let fixture: ComponentFixture<MealsListAddMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsListAddMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsListAddMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
