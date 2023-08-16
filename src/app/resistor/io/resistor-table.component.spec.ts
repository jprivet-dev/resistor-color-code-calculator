import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorTableComponent } from './resistor-table.component';

describe('ResistorTableComponent', () => {
  let component: ResistorTableComponent;
  let fixture: ComponentFixture<ResistorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorTableComponent]
    });
    fixture = TestBed.createComponent(ResistorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
