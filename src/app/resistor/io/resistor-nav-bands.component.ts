import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Decode } from '../resistor.model';

@Component({
  selector: 'app-resistor-nav-bands',
  templateUrl: './resistor-nav-bands.component.html',
  styleUrls: ['./resistor-nav-bands.component.scss'],
})
export class ResistorNavBandsComponent {
  @Input() decode!: Readonly<Decode>;
  @Input() bandsCounts!: number[];
  @Output() bandsCountEvent = new EventEmitter<number>();

  setBandsCount(bandsCount: number): void {
    this.bandsCountEvent.emit(bandsCount);
  }
}
