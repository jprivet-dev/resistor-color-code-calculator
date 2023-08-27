import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorSeriesComponent } from './resistor-series.component';

describe('ResistorSeriesComponent', () => {
  let component: ResistorSeriesComponent;
  let fixture: ComponentFixture<ResistorSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorSeriesComponent]
    });
    fixture = TestBed.createComponent(ResistorSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
