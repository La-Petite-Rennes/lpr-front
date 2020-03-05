import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {SharedModule} from '../shared/shared.module';
import {AdherentComponent} from './adherent.component';
import {AdherentsTableComponent} from './adherents-table/adherents-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    SharedModule.forChild(),
  ],
  exports: [
    AdherentComponent
  ],
  declarations: [
    AdherentComponent,
    AdherentsTableComponent
  ]
})
export class AdherentModule {
}
