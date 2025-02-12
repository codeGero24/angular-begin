import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // - Esequire azioni personalizzate Qui!!!

    // - Esempio: aggiunta header Authorization a tutte le richieste
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorizzation: `Bearer ${'my_token'}`,
      },
    });

    //- Passo la richiesta modificata
    return next.handle(modifiedRequest);
  }
}
