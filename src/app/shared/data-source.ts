import {ChangeDetectorRef, EventEmitter} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {merge, Observable, of} from 'rxjs';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {IPageable} from '../core/pagination.model';

export abstract class LprDataSource<I, O> extends DataSource<O> {
  isLoading = true;
  errorOccurred: boolean;

  protected constructor(
  ) {
    super();
  }

  /**
   * Connects a collection viewer (such as a data-table) to this data source. Note that
   * the stream provided will be accessed during change detection and should not directly change
   * values that are bound in template views.
   *
   * @returns Observable that emits a new value when the data changes.
   */
  abstract connectSource(): Observable<I>;

  /**
   * Watch on these observables to retrieve data (via {@link LprDataSource.connectSource})
   * whenever a changes on these observable happens.
   */
  observeOn(): Array<Observable<any> | EventEmitter<any>> {
    return [];
  }

  connect(): Observable<O[]> {
    return merge(
      ...this.observeOn()
    ).pipe(
      startWith(null),
      tap(() => this.markAsLoading()),
      switchMap(() => this.connectSource()),
      map((data) => {
        this.isLoading = false;
        this.errorOccurred = false;

        return this.mapResults(data);
      }),
      catchError(() => {
        this.isLoading = false;
        this.errorOccurred = true;

        return of([]);
      })
    );
  }

  abstract mapResults(input: I): O[];

  markAsLoading() {
    this.isLoading = true;
  }

  disconnect() {
  }
}
