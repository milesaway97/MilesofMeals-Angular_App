import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User} from "../interfaces/user";
import {SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private url = 'https://milesofmeals-server.onrender.com';
  private url = 'http://localhost:3000';
  private users$: Subject<User[]> = new Subject();
  private currentUser: SocialUser | undefined;

  constructor(private httpClient: HttpClient) { }

  updateCurrUser(socialUser: SocialUser) {
    this.currentUser = socialUser;
    console.log(this.currentUser);
  }

  getCurrUser(): SocialUser {
    return <SocialUser>this.currentUser;
  }

  // refreshUsers() method is used to fetch the full list of users
  private refreshUsers() {
    this.httpClient.get<User[]>(`${this.url}/users`)
      .subscribe(users => {
        this.users$.next(users);
      });
  }

  getUsers(): Subject<User[]> {
    this.refreshUsers();
    return this.users$;
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/users/${id}`);
  }

  createUser(user: User): Observable<string> {
    console.log("createuser()");
    return this.httpClient.post(`${this.url}/users`, user, { responseType: 'text' });
  }

  updateUser(id: string, user: User): Observable<string> {
    return this.httpClient.put(`${this.url}/users/${id}`, user, { responseType: 'text' });
  }

  deleteUser(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/users/${id}`, { responseType: 'text' });
  }
}
