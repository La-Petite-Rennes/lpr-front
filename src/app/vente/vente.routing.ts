import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VentesTableComponent} from './ventes-table/ventes-table.component';
import {VenteNouvelleComponent} from './vente-nouvelle/vente-nouvelle.component';

const venteRoute: Routes = [
  { path: '', component: VentesTableComponent },
  { path: 'nouvelle', component: VenteNouvelleComponent }
];

export const VenteRoute: ModuleWithProviders = RouterModule.forChild(venteRoute);
