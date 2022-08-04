import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsTopContentComponent } from './recipe-details-top-content.component';

describe('RecipeDetailsTopContentComponent', () => {
  let component: RecipeDetailsTopContentComponent;
  let fixture: ComponentFixture<RecipeDetailsTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsTopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
