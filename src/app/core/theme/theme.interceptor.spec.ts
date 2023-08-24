import { TestBed } from '@angular/core/testing';

import { ThemeInterceptor } from './theme.interceptor';

describe('ThemeInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ThemeInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: ThemeInterceptor = TestBed.inject(ThemeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
