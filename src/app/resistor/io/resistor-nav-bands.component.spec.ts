import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorNavBandsComponent } from './resistor-nav-bands.component';

describe('ResistorNavBandsComponent', () => {
  let component: ResistorNavBandsComponent;
  let fixture: ComponentFixture<ResistorNavBandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorNavBandsComponent]
    });
    fixture = TestBed.createComponent(ResistorNavBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
