import { Component, inject } from '@angular/core';
import { langConfig, LangService } from '../lang/lang.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private langService = inject(LangService);
  readonly langConfig = langConfig;
  isMenuCollapsed = true;

  setLang(lang: string): void {
    this.langService.setLang(lang);
  }
}
