import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Article} from './article.model';
import {map} from 'rxjs/operators';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';

@Injectable()
export class ArticleService {

  static RESOURCE = 'articles';

  constructor(private http: HttpClient) {
  }

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
