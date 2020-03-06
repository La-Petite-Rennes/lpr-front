import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

/**
 * The interceptor is responsible of displaying a message when an HTTP error occurs.
 */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  private static EXCLUDED_URLS = ['assets/i18n/\\w+\\.json'];

  constructor(
    private injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && this.shouldBeIntercepted(req.url)) {
          const snackBar: MatSnackBar = this.injector.get(MatSnackBar);

          if (!environment.production) {
            console.error(err);
          }

          let error;
          try {
            error = JSON.parse(err.error);
          } catch (e) {
            error = err.error;
          }
          let message;

          switch (err.status) {
            case 401:
            case 403:
            case 404:
              message = err.status;
              break;

            default:
              message = error && error.message ? error.message : null;
              break;
          }

          // No message was found, let's just display a default error message
          if (message === null || message === undefined) {
            message = 'general';
          }

          snackBar.open(message, 'OK', {
            duration: 2000
          });
        }

        return throwError(err);
      })
    );
  }

  private shouldBeIntercepted(url): boolean {
    return ResponseInterceptor.EXCLUDED_URLS.some(rx => !new RegExp(rx).test(url));
  }

}
