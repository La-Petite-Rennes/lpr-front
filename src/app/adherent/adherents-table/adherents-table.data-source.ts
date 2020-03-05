import {ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Observable} from 'rxjs';

import {Adherent} from '../../shared/adherent/adherent.model';
import {AdherentService} from '../../shared/adherent/adherent.service';
import {IPageable} from '../../core/pagination.model';
import {LprDataSource} from '../../shared/data-source';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

export class AdherentsDataSource extends LprDataSource<Adherent> {
  PAGE_SIZE = 10;

  constructor(
    private adherentService: AdherentService,
    private paginator: MatPaginator,
    private search: FormControl,
    cd: ChangeDetectorRef
  ) {
    super(cd);
  }

  observeOn(): Array<Observable<any>> {
    return [
      this.paginator.page,
      this.search.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
    ];
  }

  connectSource(): Observable<IPageable<Adherent>> {
    return this.adherentService.search(
      this.search.value,
      {
        size: this.PAGE_SIZE,
        page: this.paginator.pageIndex
      });
  }

  disconnect() {
  }
}
