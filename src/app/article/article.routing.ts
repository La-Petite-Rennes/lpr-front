import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ArticleComponent} from './article.component';

const articleRoute: Routes = [
  {path: 'articles', component: ArticleComponent}
];

export const ArticleRoute: ModuleWithProviders = RouterModule.forChild(articleRoute);
