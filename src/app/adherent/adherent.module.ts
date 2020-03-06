import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {SharedModule} from '../shared/shared.module';
import {AdherentComponent} from './adherent.component';
import {AdherentsTableComponent} from './adherents-table/adherents-table.component';
import { AdherentRoute } from './adherent.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    AdherentRoute
  ],
  declarations: [
    AdherentComponent,
    AdherentsTableComponent
  ]
})
export class AdherentModule { }
