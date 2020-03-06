import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from '../shared/shared.module';
import {ArticleComponent} from './article.component';
import {ArticlesTableComponent} from './articles-table/articles-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule.forChild()
  ],
  exports: [
    ArticleComponent
  ],
  declarations: [
    ArticleComponent,
    ArticlesTableComponent
  ]
})
export class ArticleModule {
}
