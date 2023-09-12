import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Meal } from '../../../../core/interfaces/meal';
import { MealService } from '../../../../core/services/meal.service';
import { UserService} from "../../../../core/services/user.service";

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  meals$: Observable<Meal[]> = new Observable();

  constructor(
    private mealsService: MealService,
    private userService: UserService,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      this.userService.updateCurrUser(this.socialUser);

      if (this.isLoggedin) {
        this.fetchUserMeals();
        this.userService.updateUser(this.socialUser.id, {
          "name": this.socialUser.name,
          "email": this.socialUser.email,
          "id": this.socialUser.id,
          "idToken": this.socialUser.idToken,
          "photoUrl": this.socialUser.photoUrl
        }).subscribe({
          next: () => {
            console.log("updated user");
          },
          error: (error) => {
            alert("Failed to update user");
            console.error(error);
          }
        });
      }
      console.log(this.socialUser);
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
      next: () => this.fetchUserMeals()
    });
  }

  //Get current user's meals
  private fetchUserMeals(): void {
    this.meals$ = this.mealsService.getUserMeals(this.socialUser.id);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
