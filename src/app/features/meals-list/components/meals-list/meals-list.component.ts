import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';


@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  // loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  meals$: Observable<Meal[]> = new Observable();

  constructor(
    private mealsService: MealService,
    // private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit(): void {
    this.fetchMeals();

    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null; // = true
      // this.newItemEvent.emit(this.isLoggedin);
      console.log(this.socialUser);
      console.log(this.isLoggedin);
    });
    // console.log(this.isLoggedin);
  }

  // @Output() newItemEvent = new EventEmitter<boolean>();

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  deleteMeal(id: string): void {
    this.mealsService.deleteMeal(id).subscribe({
      next: () => this.fetchMeals()
    });
  }

  private fetchMeals(): void {
    this.meals$ = this.mealsService.getMeals();
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
