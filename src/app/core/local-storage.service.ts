import { Injectable } from '@angular/core';

import { CoreServiceModule } from './service.module';

/**
 * A local storage service built on top of `window.localStorage`.
 */
@Injectable({
  providedIn: CoreServiceModule
})
export class LocalStorage {
  public static PREFIX = 'lpr';

  /**
   * Directly get a value from local storage.
   */
  get <T>(key: string): T {
    const item = localStorage.getItem(this.getKey(key));

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  }

  /**
   * Directly adds a value to local storage.
   */
  set <T>(key: string, value: T): boolean {
    let storageValue: string | null;

    // Let's convert undefined values to null to get the value consistent
    if (value === undefined) {
      storageValue = null;
    } else {
      storageValue = JSON.stringify(value);
    }

    try {
      localStorage.setItem(this.getKey(key), storageValue);
    } catch (e) {
      return false;
    }

    return true;
  }

  /**
   * Remove an item from local storage by key.
   */
  remove(key: string): void {
    localStorage.removeItem(this.getKey(key));
  }

  /**
   * Retrieve the full key
   */
  private getKey(key: string): string {
    return `${LocalStorage.PREFIX}.${key}`;
  }

}
