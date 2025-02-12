import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accesToken = localStorage.getItem('access_token');

    if (accesToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorizzation: `Bearer ${accesToken}`,
        },
      });

      next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
