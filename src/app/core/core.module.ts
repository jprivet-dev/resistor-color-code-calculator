import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavModule],
  exports: [NavModule],
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
