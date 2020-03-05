import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPageable, Pagination} from '../../core/pagination.model';
import {Observable} from 'rxjs';
import {HttpUtils} from '../http/http.utils';
import {Adherent} from './adherent.model';
import {environment} from '../../../environments/environment';

@Injectable()
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
    });
  }
}
