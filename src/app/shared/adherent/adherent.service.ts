import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpUtils } from '../http/http.utils';
import { SharedModule } from '../shared.module';
import { Adherent } from './adherent.model';
import { environment } from '../../../environments/environment';
import { IPageable, Pagination } from '../../core/pagination.model';

@Injectable({
  providedIn: SharedModule
})
export class AdherentService {

  static RESOURCE = 'adherents';

  constructor(
    private http: HttpClient
  ) {
  }

  search(filter: string, params: Pagination): Observable<IPageable<Adherent>> {
    return this.http.get<IPageable<Adherent>>(
      `${environment.baseUrl}/${AdherentService.RESOURCE}/search`, {
        params: HttpUtils.getHttpParams({
          criteria: filter,
          ...params
        })
      })
      .pipe(
        map(data => {
          const jsonConvert = new JsonConvert();
          jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

          data.content = jsonConvert.deserializeArray(data.content, Adherent);

          return data;
        })
      );
  }
}
