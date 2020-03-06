import {IPageable} from '../core/pagination.model';
import {LprDataSource} from './data-source';

export abstract class LprArrayDataSource<T> extends LprDataSource<T[], T> {

  protected constructor(
  ) {
    super();
  }

  mapResults(data: T[]): T[] {
    return data;
  }
}
