import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorDataComponent } from './resistor-data.component';

describe('ResistorDataComponent', () => {
  let component: ResistorDataComponent;
  let fixture: ComponentFixture<ResistorDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorDataComponent]
    });
    fixture = TestBed.createComponent(ResistorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
