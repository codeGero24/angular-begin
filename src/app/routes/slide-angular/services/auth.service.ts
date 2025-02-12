import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { httpOptions, RespRefreshToken } from './service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'api/auth';

  constructor(private http: HttpClient) {}

  private getHttpOptions(): httpOptions {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Autorization: `Bearer ${'tocken_here'}`,
      'Custom-Header': 'header_value',
    });

    const httpOptions = {
      headers: headers,
    };
    return httpOptions;
  }

  refreshToken(): Observable<RespRefreshToken> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<RespRefreshToken>(this.API_URL, httpOptions).pipe(
      tap((resp) => {
        const token = resp.token;
        if (token) {
          localStorage.setItem('access_token', token);
        } else {
          localStorage.removeItem('access_token');
        }

        return resp;
      })
    );
  }}
