import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

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

  setLang(lang: string): void {
    this.setLangInStorage(lang);
    this.document.documentElement.lang = lang;
    this.transloco.setActiveLang(lang);
  }

  retrieveLang(): string {
    const lang = this.getLangFromStorage();
    return lang === null ? this.transloco.getActiveLang() : lang;
  }

  setLangInStorage(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  getLangFromStorage(): string | null {
    return localStorage.getItem('lang');
  }
}
