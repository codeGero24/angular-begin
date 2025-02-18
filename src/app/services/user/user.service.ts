import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { RespUsers, User } from '@routes/slide-angular/services/service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUsers(): Observable<RespUsers> {
    return this.http.get<RespUsers>(`${this.API_URL}/users`).pipe(
      tap((_) => console.log(`fetched getUsers::`)),
      map((resp) => resp['users']),
      catchError(this.handleError<any>('getUsers', []))
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/users/${id}`).pipe(
      tap((_) => console.log(`fetched getUserById::`)),
      catchError(this.handleError<any>('getUsers', []))
    );
  }
}
