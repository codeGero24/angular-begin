import type { httpOptions } from './service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '@services/message/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private API_URL = 'https://dummyjson.com';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private getHttpOptions(): httpOptions {
    const headers = new HttpHeaders({
      Autorization: `Bearer ${'tocken_here'}`,
      'Custom-Header': 'header_value',
    });

    const httpOptions = {
      headers: headers,
    };
    return httpOptions;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MyService: ${message}`);
  }

  getData(): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.get(this.API_URL, httpOptions);
  }
}
