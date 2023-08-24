import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorOffcanvasComponent } from './resistor-offcanvas.component';

describe('ResistorOffcanvasComponent', () => {
  let component: ResistorOffcanvasComponent;
  let fixture: ComponentFixture<ResistorOffcanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorOffcanvasComponent],
    });
    fixture = TestBed.createComponent(ResistorOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
