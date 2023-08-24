import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LangService } from '@core/lang/lang.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPageComponent {
  private langService = inject(LangService);
  readonly langLabel$ = this.langService.langLabel$;
}
