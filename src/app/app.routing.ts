import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HeaderComponent } from './core/header/header.component';

const appRoutes: Routes = [
  {
    path: 'connexion',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    children: [
      {
        path: 'adherents',
        loadChildren: () => import('./adherent/adherent.module').then(m => m.AdherentModule)
      },
      {
        path: 'articles',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
      },
      {
        path: 'ventes',
        loadChildren: () => import('./vente/vente.module').then(m => m.VenteModule)
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
