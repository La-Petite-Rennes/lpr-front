import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {SharedModule} from '../shared/shared.module';
import {ArticleComponent} from './article.component';
import {ArticlesTableComponent} from './articles-table/articles-table.component';
import { ArticleRoute } from './article.routing';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    ArticleRoute
  ],
  declarations: [
    ArticleComponent,
    ArticlesTableComponent
  ]
})
export class ArticleModule {
}
