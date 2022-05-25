import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchAutocompleteComponent } from './recipe-search-autocomplete.component';

describe('RecipeSearchAutocompleteComponent', () => {
  let component: RecipeSearchAutocompleteComponent;
  let fixture: ComponentFixture<RecipeSearchAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSearchAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
