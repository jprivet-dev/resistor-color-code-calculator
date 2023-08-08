import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorComponent } from './resistor.component';

describe('ResistorComponent', () => {
  let component: ResistorComponent;
  let fixture: ComponentFixture<ResistorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorComponent],
    });
    fixture = TestBed.createComponent(ResistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
