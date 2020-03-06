import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ArticleService} from '../../shared/stock/article.service';
import {ArticlesDataSource} from './articles-table.data-source';

@Component({
  selector: 'lpr-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesTableComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'quantite', 'prixVente', 'fournisseur', 'prixAchatUnitaire'];
  dataSource: ArticlesDataSource;

  constructor(
    private articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new ArticlesDataSource(
      this.articleService
    );
  }
}
