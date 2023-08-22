import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LangService } from '@core/lang/lang.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  private langService = inject(LangService);
  readonly langLabel$ = this.langService.langLabel$;
}
