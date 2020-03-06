import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoreServiceModule } from '../service.module';
import { User } from './user.model';
import { IPageable, Pagination } from '../pagination.model';
import { environment } from '../../../environments/environment';
import { LocalStorage } from '../local-storage.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class UserService {
  private static RESOURCE = 'users';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorage
  ) { }

  me(): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/${UserService.RESOURCE}/me`).pipe(
      map((user) => {
        const jsonConvert = new JsonConvert();
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

        this.localStorage.set(UserService.RESOURCE, user);

        return jsonConvert.deserializeObject(user, User);
      })
    );
  }

  create(user: User): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}/${UserService.RESOURCE}`, user);
  }

  update(username: string, user: User): Observable<void> {
    return this.http.put<void>(`${environment.baseUrl}/${UserService.RESOURCE}/${username}`, user);
  }
}
