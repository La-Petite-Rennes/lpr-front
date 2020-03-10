import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { AdherentComponent } from './adherent.component';
import { AdherentsTableComponent } from './adherents-table/adherents-table.component';
import { AdherentRoute } from './adherent.routing';
import { AdherentNewComponent } from './adherent-new/adherent-new.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    AdherentRoute,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    AdherentComponent,
    AdherentsTableComponent,
    AdherentNewComponent
  ]
})
export class AdherentModule { }
