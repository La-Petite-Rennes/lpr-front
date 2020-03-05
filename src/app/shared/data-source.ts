import {ChangeDetectorRef, EventEmitter} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {merge, Observable, of} from 'rxjs';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {IPageable} from '../core/pagination.model';

export abstract class LprDataSource<T> extends DataSource<T> {
  isLoading = true;
  errorOccurred: boolean;

  totalElements: number | undefined = 0;
  pageIndex: number | undefined;

  protected constructor(
    protected cd: ChangeDetectorRef
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
  abstract connectSource(): Observable<IPageable<T>>;

  /**
   * Watch on these observables to retrieve data (via {@link LprDataSource.connectSource})
   * whenever a changes on these observable happens.
   */
  observeOn(): Array<Observable<any> | EventEmitter<any>> {
    return [];
  }

  connect(): Observable<T[]> {
    return merge(
      ...this.observeOn()
    ).pipe(
      startWith(null),
      tap(() => this.markAsLoading()),
      switchMap(() => this.connectSource()),
      map((pageable) => {
        this.isLoading = false;
        this.errorOccurred = false;
        this.totalElements = pageable.totalElements;
        this.pageIndex = pageable.number;

        this.cd.markForCheck();

        return pageable.content;
      }),
      catchError(() => {
        this.isLoading = false;
        this.errorOccurred = true;

        this.cd.markForCheck();

        return of([]);
      })
    );
  }

  markAsLoading() {
    this.isLoading = true;

    this.cd.markForCheck();
  }
}
