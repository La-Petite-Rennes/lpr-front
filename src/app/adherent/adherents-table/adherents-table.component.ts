import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {AdherentsDataSource} from './adherents-table.data-source';
import {AdherentService} from '../../shared/adherent/adherent.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'lpr-adherents-table',
  templateUrl: './adherents-table.component.html',
  styleUrls: ['./adherents-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdherentsTableComponent implements OnInit {

  displayedColumns: string[] = ['prenom', 'nom', 'dateDerniereAdhesion', 'estBenevole', 'remarqueBenevolat', 'autreRemarque'];
  dataSource: AdherentsDataSource;
  filter = new FormControl();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private adherentService: AdherentService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataSource = new AdherentsDataSource(
      this.adherentService,
      this.paginator,
      this.filter,
      this.cd
    );
  }
}
