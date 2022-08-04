import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Meal} from "../interfaces/meal";

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient) { }

  public sendGetRequest(requestURL: string): Observable<Meal[]> {
    return this.http.get<any>(requestURL)
      .pipe(
        map( response => {
          return response.meals;
        }),
        catchError( error => {
          return throwError(error); // From 'rxjs'
        })
      );
  }

}
