import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPageComponent {}
