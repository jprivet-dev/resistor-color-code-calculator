import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { LangInterceptor } from './lang/lang.interceptor';
import { NavModule } from './nav/nav.module';
import { ThemeInterceptor } from './theme/theme.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavModule, FooterModule],
  exports: [NavModule, FooterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LangInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ThemeInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only.',
      );
    }
  }
}
