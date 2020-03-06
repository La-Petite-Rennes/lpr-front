import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sale} from './sale.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class SaleService {

  static RESOURCE = 'sales';

  constructor(
    private http: HttpClient
  ) {
  }

  newSale(sale: Sale): Observable<void> {
    return this.http.post<void>(
      `${environment.baseUrl}/${SaleService.RESOURCE}`,
      sale
    );
  }
}
