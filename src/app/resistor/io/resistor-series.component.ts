import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Decode,
  SeriesE12Item,
  SeriesE96Item,
  SeriesName,
} from '../resistor.model';
import {
  generateArduinoStarterKit,
  generateSeriesE12,
} from '../resistor.utils';

@Component({
  selector: 'app-resistor-series',
  templateUrl: './resistor-series.component.html',
  styleUrls: ['./resistor-series.component.scss'],
})
export class ResistorSeriesComponent {
  @Input() seriesName!: SeriesName;
  @Input() resistance!: number;
  @Input() decode!: Readonly<Decode>;
  @Output() seriesE12ItemEvent = new EventEmitter<SeriesE12Item>();
  @Output() seriesE96ItemEvent = new EventEmitter<SeriesE96Item>();

  readonly seriesE12Items = generateSeriesE12();
  @Input() seriesE96Items!: SeriesE96Item[];
  readonly arduinoStarterKitItems = generateArduinoStarterKit();

  chooseSeriesE12Item(item: SeriesE12Item): void {
    this.seriesE12ItemEvent.emit(item);
  }

  chooseSeriesE96Item(item: SeriesE96Item): void {
    this.seriesE96ItemEvent.emit(item);
  }
}
