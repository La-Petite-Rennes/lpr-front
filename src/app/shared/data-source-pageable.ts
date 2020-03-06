import {IPageable} from '../core/pagination.model';
import {LprDataSource} from './data-source';

export abstract class LprPageableDataSource<T> extends LprDataSource<IPageable<T>, T> {
  totalElements: number | undefined = 0;
  pageIndex: number | undefined;

  protected constructor(
  ) {
    super();
  }

  mapResults(pageable: IPageable<T>): T[] {
    this.totalElements = pageable.totalElements;
    this.pageIndex = pageable.number;

    return pageable.content;
  }
}
