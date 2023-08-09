import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export interface ThemeConfig {
  theme: string;
  key: string;
}

export const themeConfig: ThemeConfig[] = [
  { theme: 'light', key: 'light' },
  { theme: 'dark', key: 'dark' },
];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document: Document = inject(DOCUMENT);

  setTheme(theme: string): void {
    this.setThemeInStorage(theme);
    this.document.documentElement.setAttribute('data-bs-theme', theme);
  }

  retrieveTheme(): string {
    const theme = this.getThemeFromStorage();
    return theme === null ? 'light' : theme;
  }

  setThemeInStorage(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  getThemeFromStorage(): string | null {
    return localStorage.getItem('theme');
  }
}
