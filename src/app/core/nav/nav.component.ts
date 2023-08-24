import { Component, inject } from '@angular/core';
import { langConfig, LangService } from '../lang/lang.service';
import { ThemeService } from '../theme/theme.service';
import { ThemeNames } from '../theme/theme.service';
import { ThemeConfig } from '../theme/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private langService = inject(LangService);
  readonly langConfig = langConfig;
  readonly langLabel$ = this.langService.langLabel$;

  private themeService = inject(ThemeService);
  readonly themeName$ = this.themeService.themeName$;
  readonly themeConfig = this.themeService.themeConfig;

  isMenuCollapsed = true;

  setLang(lang: string): void {
    this.langService.setLang(lang);
  }

  findLangLabel(lang: string): string {
    const config = this.langService.findLangConfig(lang);
    return config ? config.label : '';
  }

  setTheme(theme: ThemeNames): void {
    this.themeService.setTheme(theme);
  }

  findTheme(themeName: ThemeNames): ThemeConfig | undefined {
    return this.themeService.findTheme(themeName);
  }
}
