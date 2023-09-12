import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  // private url = 'https://milesofmeals-server.onrender.com';
  private url = 'http://localhost:3000';
  private meals$: Subject<Meal[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  // refreshMeals() method is used to fetch the full list of meals
  private refreshMeals() {
    this.httpClient.get<Meal[]>(`${this.url}/meals`)
      .subscribe(meals => {
        this.meals$.next(meals);
      });
  }
  // returns all meals
  getMeals(): Subject<Meal[]> {
    this.refreshMeals();
    return this.meals$;
  }

  // pass current user's id to return their meals
  getUserMeals(userId: string): Subject<Meal[]> {
    this.httpClient.get<Meal[]>(`${this.url}/meals/usermeals/${userId}`)
      .subscribe(meals => {
        this.meals$.next(meals);
      });
    return this.meals$;
  }

  getMeal(id: string): Observable<Meal> {
    return this.httpClient.get<Meal>(`${this.url}/meals/${id}`);
  }

  createMeal(meal: Meal): Observable<string> {
    return this.httpClient.post(`${this.url}/meals`, meal, { responseType: 'text' });
  }

  updateMeal(id: string, meal: Meal): Observable<string> {
    return this.httpClient.put(`${this.url}/meals/${id}`, meal, { responseType: 'text' });
  }

  deleteMeal(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/meals/${id}`, { responseType: 'text' });
  }
}
