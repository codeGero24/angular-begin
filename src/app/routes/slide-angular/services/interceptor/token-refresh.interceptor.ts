import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.authService.refreshToken().pipe(
            switchMap(() => {
              const newAccessToken = localStorage.getItem('access_token');
              if (newAccessToken) {
                const modifiedRequest = request.clone({
                  setHeaders: {
                    Authorizzation: `Bearer ${newAccessToken}`,
                  },
                });

                return next.handle(modifiedRequest);
              }

              return throwError(
                'Non è stato possibile ottenere il nuovo token'
              );
            })
          );
        }

        return throwError(error);
      })
    );
  }
}
