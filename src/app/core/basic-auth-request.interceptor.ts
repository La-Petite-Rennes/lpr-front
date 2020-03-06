import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

/**
 * The interceptor is responsible of setting the `Authorization` header before sending a request to the server.
 */
@Injectable()
export class BasicAuthRequestInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Basic ${this.authenticationService.getBasicAuthToken()}`)
    });

    return next.handle(authReq);
  }

}
