/**
 * The params can be passed to a pagination object.
 */
import {SortDirection} from '@angular/material/sort';

export interface Pagination {

  /**
   * The sort direction.
   */
  direction?: SortDirection | undefined;

  /**
   * What number of structure do you want to retrieve ?
   */
  size?: number | undefined;

  /**
   * The page number.
   */
  page?: number | undefined;

}

/**
 * A pageable response.
 */
export interface IPageable<T> {

  /**
   * Pagination content.
   */
  content: T[];

  /**
   * Is this the first page ?
   */
  first?: boolean;

  /**
   * Is this the last page ?
   */
  last?: boolean;

  /**
   * Page number.
   */
  number?: number;

  /**
   * Number of retrieved elements.
   */
  numberOfElements?: number;

  /**
   * Number of elements per page.
   */
  size?: number;

  /**
   * Total number of elements across pages.
   */
  totalElements?: number;

  /**
   * Total number of pages.
   */
  totalPages?: number;

}
