import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@shared/local-storage.service';
import { BehaviorSubject } from 'rxjs';

export type ThemeNames = 'light' | 'dark';

export interface ThemeConfig {
  name: ThemeNames;
  key: ThemeNames;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document: Document = inject(DOCUMENT);
  private localStorageService = inject(LocalStorageService);

  private themeNameSubject = new BehaviorSubject<ThemeNames>('light');
  readonly themeName$ = this.themeNameSubject.asObservable();

  readonly KEY_THEME = 'theme';
  readonly themeConfig: ThemeConfig[] = [
    { name: 'light', key: 'light', icon: 'bi-brightness-high-fill' },
    { name: 'dark', key: 'dark', icon: 'bi-moon-stars-fill' },
  ];

  setTheme(themeName: ThemeNames): void {
    this.localStorageService.set(this.KEY_THEME, themeName);
    this.document.documentElement.setAttribute('data-bs-theme', themeName);
    this.themeNameSubject.next(themeName);
  }

  retrieveTheme(): ThemeNames {
    const theme = this.localStorageService.get(this.KEY_THEME);
    return theme === null ? 'light' : (theme as ThemeNames);
  }

  findTheme(themeName: ThemeNames): ThemeConfig | undefined {
    return this.themeConfig.find((theme) => theme.name === themeName);
  }
}
