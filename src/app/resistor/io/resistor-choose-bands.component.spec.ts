import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorChooseBandsComponent } from './resistor-choose-bands.component';

describe('ResistorChooseBandsComponent', () => {
  let component: ResistorChooseBandsComponent;
  let fixture: ComponentFixture<ResistorChooseBandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorChooseBandsComponent]
    });
    fixture = TestBed.createComponent(ResistorChooseBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
