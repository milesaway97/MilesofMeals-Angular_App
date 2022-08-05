import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSocialLoginComponent } from './google-social-login.component';

describe('GoogleSocialLoginComponent', () => {
  let component: GoogleSocialLoginComponent;
  let fixture: ComponentFixture<GoogleSocialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSocialLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
