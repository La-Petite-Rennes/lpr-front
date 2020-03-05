import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdherentComponent} from './adherent.component';

const adherentRoute: Routes = [
  { path: '', component: AdherentComponent }
];

export const AdherentRoute: ModuleWithProviders = RouterModule.forChild(adherentRoute);
