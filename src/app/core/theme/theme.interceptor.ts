import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Injectable()
export class ThemeInterceptor implements HttpInterceptor {
  private themeService = inject(ThemeService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.themeService.setTheme(this.themeService.retrieveTheme());
    return next.handle(request);
  }
}
