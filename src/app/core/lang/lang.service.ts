import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalStorageService } from '@shared/local-storage.service';
import { BehaviorSubject } from 'rxjs';

export interface Lang {
  lang: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private document: Document = inject(DOCUMENT);
  private translocoService = inject(TranslocoService);
  private localStorageService = inject(LocalStorageService);

  private langLabelSubject = new BehaviorSubject<string>('');
  readonly langLabel$ = this.langLabelSubject.asObservable();

  readonly KEY_LANG = 'lang';
  readonly langConfig: Lang[] = [
    { lang: 'en', label: 'English' },
    { lang: 'fr', label: 'Français' },
  ];

  setLang(lang: string): void {
    this.localStorageService.set(this.KEY_LANG, lang);
    this.document.documentElement.lang = lang;
    this.langLabelSubject.next(lang);
    this.translocoService.setActiveLang(lang);
  }

  retrieveLang(): string {
    const lang = this.localStorageService.get(this.KEY_LANG);
    return lang ? lang : this.translocoService.getActiveLang();
  }

  findLangConfig(lang: string): Lang | undefined {
    return this.langConfig.find((config) => config.lang === lang);
  }
}
