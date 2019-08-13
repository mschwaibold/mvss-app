import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';

import { AuthenticatedUser } from '../_models/authenticatedUser';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<AuthenticatedUser>;
  public currentUser: Observable<AuthenticatedUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthenticatedUser>(JSON.parse(localStorage.getItem('currentUser')) as AuthenticatedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthenticatedUser {
    return this.currentUserSubject.value;
  }

  login(id: number): void {
    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, {username, password})
    this.http.get<AuthenticatedUser>(`api/users/${id}`)
      .pipe(map(user => {
          // login successful if there's an authenticated user in the response
          if (user) {
            // store user details in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user as AuthenticatedUser);
          }

          return user;
        }),
        catchError(this.handleError<AuthenticatedUser>('login'))).subscribe();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
