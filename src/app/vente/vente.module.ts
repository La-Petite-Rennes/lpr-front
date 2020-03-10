import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VenteNouvelleComponent} from './vente-nouvelle/vente-nouvelle.component';
import {VentesTableComponent} from './ventes-table/ventes-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatOptionModule} from '@angular/material/core';
import {VenteRoute} from './vente.routing';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    VenteNouvelleComponent,
    VentesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    VenteRoute,
    MatButtonModule
  ]
})
export class VenteModule {
}
