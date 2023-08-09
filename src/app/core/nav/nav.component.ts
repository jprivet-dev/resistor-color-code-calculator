import { Component, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private transloco = inject(TranslocoService);

  langs: { lang: string; label: string }[] = [
    { lang: 'en', label: 'English' },
    { lang: 'fr', label: 'Français' },
  ];

  isMenuCollapsed = true;

  changeLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this.transloco.setActiveLang(lang);
  }
}
