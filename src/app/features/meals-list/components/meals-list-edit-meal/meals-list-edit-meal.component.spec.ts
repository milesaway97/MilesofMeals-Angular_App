import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsListEditMealComponent } from './meals-list-edit-meal.component';

describe('MealsListEditMealComponent', () => {
  let component: MealsListEditMealComponent;
  let fixture: ComponentFixture<MealsListEditMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsListEditMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsListEditMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
