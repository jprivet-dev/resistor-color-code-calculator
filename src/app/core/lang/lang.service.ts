import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject } from 'rxjs';

export const langConfig: { lang: string; label: string }[] = [
  { lang: 'en', label: 'English' },
  { lang: 'fr', label: 'Français' },
];

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private transloco = inject(TranslocoService);
  private document: Document = inject(DOCUMENT);
  private langLabelSubject = new BehaviorSubject<string>('');
  readonly langLabel$ = this.langLabelSubject.asObservable();

  setLang(lang: string): void {
    this.setLangInStorage(lang);
    this.document.documentElement.lang = lang;
    this.langLabelSubject.next(lang);
    this.transloco.setActiveLang(lang);
  }

  retrieveLang(): string {
    const lang = this.getLangFromStorage();
    return lang === null ? this.transloco.getActiveLang() : lang;
  }

  setLangInStorage(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  findLangConfig(lang: string): { lang: string; label: string } | undefined {
    return langConfig.find((config) => config.lang === lang);
  }

  getLangFromStorage(): string | null {
    return localStorage.getItem('lang');
  }
}
