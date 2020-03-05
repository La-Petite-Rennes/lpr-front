import { HttpParams } from '@angular/common/http';

export class HttpUtils {

  /**
   * Creating an `HttpParams` instance from a JSON is really boring.
   * There is an helper for doing so.
   *
   * @returns {HttpParams}
   */
  public static getHttpParams (params: any): HttpParams {
    let httpParams = new HttpParams();

    if (params.sort !== undefined && params.direction !== undefined) {
      params.sort = `${params.sort},${params.direction}`;
      delete params.direction;
    }

    for (const [ key, value ] of Object.entries(params)) {
      if (value) {
        httpParams = httpParams.set(key, value as string);
      }
    }

    return httpParams;
  }

}
