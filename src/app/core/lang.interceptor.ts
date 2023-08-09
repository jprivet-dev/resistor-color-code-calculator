import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  private transloco = inject(TranslocoService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.transloco.setActiveLang(lang);
    }
    return next.handle(request);
  }
}
