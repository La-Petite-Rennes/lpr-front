import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Article} from './article.model';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class ArticleService {

  static RESOURCE = 'articles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.baseUrl}/${ArticleService.RESOURCE}`)
      .pipe(
        map(data => {
          const jsonConvert = new JsonConvert();
          jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

          return jsonConvert.deserializeArray(data, Article);
        })
      );
  }
}
