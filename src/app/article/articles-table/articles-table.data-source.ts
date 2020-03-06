import {ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Adherent} from '../../shared/adherent/adherent.model';
import {AdherentService} from '../../shared/adherent/adherent.service';
import {IPageable} from '../../core/pagination.model';
import {LprDataSource} from '../../shared/data-source';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ArticleService} from '../../shared/stock/article.service';
import {Article} from '../../shared/stock/article.model';
import {LprArrayDataSource} from '../../shared/data-source-array';

export class ArticlesDataSource extends LprArrayDataSource<Article> {

  constructor(
    private articleService: ArticleService,
  ) {
    super();
  }

  connectSource(): Observable<Article[]> {
    return this.articleService.getAll();
  }
}
