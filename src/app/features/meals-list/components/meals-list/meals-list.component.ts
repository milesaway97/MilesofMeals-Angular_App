import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';
import { UserService} from "../../../../core/services/user.service";
import {User} from "../../../../core/interfaces/user";

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  socialUser!: SocialUser;
  tempUser: Observable<User> | undefined;
  isLoggedin?: boolean;
  meals$: Observable<Meal[]> = new Observable();

  constructor(
    private mealsService: MealService,
    private userService: UserService,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit(): void {
    this.fetchMeals();

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      if (this.isLoggedin) {
        this.userService.updateUser(this.socialUser.id, this.socialUser);
      }
      console.log(this.socialUser);
      console.log(this.isLoggedin);
    });
  }

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
