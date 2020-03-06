import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';

import { CoreServiceModule } from './service.module';
import { LocalStorage } from './local-storage.service';
import { User } from './user/user.model';

@Injectable({
  providedIn: CoreServiceModule
})
export class AuthenticationService {
  private static RESOURCE = 'user';
  private static BASIC_AUTH_TOKEN = 'authToken';

  constructor(
    private localStorage: LocalStorage
  ) { }

  isAuthenticated(): boolean {
    return !!this.localStorage.get(AuthenticationService.RESOURCE);
  }

  getCurrentUser(): User {
    const jsonConvert = new JsonConvert();
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    return jsonConvert.deserializeObject(this.localStorage.get(AuthenticationService.RESOURCE), User);
  }

  setBasicAuthToken(username: string, password: string) {
    this.localStorage.set(AuthenticationService.BASIC_AUTH_TOKEN, btoa(`${username}:${password}`));
  }

  getBasicAuthToken(): string {
    return this.localStorage.get(AuthenticationService.BASIC_AUTH_TOKEN);
  }

  logout() {
    this.localStorage.remove(AuthenticationService.BASIC_AUTH_TOKEN);
    this.localStorage.remove(AuthenticationService.RESOURCE);
  }

}
