import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonConvert} from 'json2typescript';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Provider} from './provider.model';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class ProviderService {

  static RESOURCE = 'providers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${environment.baseUrl}/${ProviderService.RESOURCE}`)
      .pipe(
        map(data => new JsonConvert().deserializeArray(data, Provider))
      );
  }
}
