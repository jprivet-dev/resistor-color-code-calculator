import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Decode,
  SeriesE24Item,
  SeriesE96Item,
  SeriesName,
} from '../resistor.model';

@Component({
  selector: 'app-resistor-series',
  templateUrl: './resistor-series.component.html',
  styleUrls: ['./resistor-series.component.scss'],
})
export class ResistorSeriesComponent {
  @Input() seriesName!: SeriesName;
  @Input() resistance!: number;
  @Input() decode!: Readonly<Decode>;
  @Output() seriesE12ItemEvent = new EventEmitter<SeriesE24Item>();
  @Output() seriesE24ItemEvent = new EventEmitter<SeriesE24Item>();
  @Output() seriesE96ItemEvent = new EventEmitter<SeriesE96Item>();

  @Input() seriesE12Items!: SeriesE24Item[];
  @Input() seriesE24Items!: SeriesE24Item[];
  @Input() seriesE96Items!: SeriesE96Item[];
  @Input() arduinoStarterKitItems!: SeriesE24Item[];

  chooseSeriesE12Item(item: SeriesE24Item): void {
    this.seriesE24ItemEvent.emit(item);
  }

  chooseSeriesE24Item(item: SeriesE24Item): void {
    this.seriesE24ItemEvent.emit(item);
  }

  chooseSeriesE96Item(item: SeriesE96Item): void {
    this.seriesE96ItemEvent.emit(item);
  }
}
