import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Provider} from './provider.model';
import {map} from 'rxjs/operators';
import {JsonConvert} from 'json2typescript';

@Injectable()
export class ProviderService {

  static RESOURCE = 'providers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${environment.baseUrl}/${ProviderService.RESOURCE}`)
      .pipe(
        map(data => new JsonConvert().deserializeArray(data, Provider))
      );
  }
}
