import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {AdherentComponent} from './adherent.component';
import {AdherentNewComponent} from './adherent-new/adherent-new.component';

const adherentRoute: Routes = [
  { path: '', component: AdherentComponent },
  { path: 'nouveau', component: AdherentNewComponent }
];

export const AdherentRoute: ModuleWithProviders = RouterModule.forChild(adherentRoute);
