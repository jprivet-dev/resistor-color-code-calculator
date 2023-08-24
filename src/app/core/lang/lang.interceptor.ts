import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LangService } from './lang.service';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
  private langService = inject(LangService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.langService.setLang(this.langService.retrieveLang());
    return next.handle(request);
  }
}
