import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorOffcanvasContentComponent } from './resistor-offcanvas-content.component';

describe('ResistorOffcanvasContentComponent', () => {
  let component: ResistorOffcanvasContentComponent;
  let fixture: ComponentFixture<ResistorOffcanvasContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorOffcanvasContentComponent]
    });
    fixture = TestBed.createComponent(ResistorOffcanvasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
