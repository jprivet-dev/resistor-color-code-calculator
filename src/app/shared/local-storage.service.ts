import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getBoolean(key: string): boolean | null {
    const value = this.get(key);

    if (value === null) {
      return null;
    }

    return value.trim().toLowerCase() === 'true';
  }

  getNumber(key: string): number | null {
    const value = this.get(key);

    if (value === null) {
      return null;
    }

    const int = parseInt(value);
    const float = parseFloat(value);

    return int === float ? int : float;
  }

  /**
   * There are 6 types of objects:
   * Object / Date / Array / String / Number / Boolean
   * @see https://www.w3schools.com/js/js_typeof.asp
   */
  setObject(key: string, value: object): void {
    this.set(key, JSON.stringify(value));
  }

  getObject(key: string): object | null {
    const value = this.get(key);

    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value);
    } catch (error) {
      console.error(`Failed to read ${key} from localStorage: `, error);
    }

    return null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
