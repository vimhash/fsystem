import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeudasComponent } from './detalle-deudas.component';

describe('DetalleDeudasComponent', () => {
  let component: DetalleDeudasComponent;
  let fixture: ComponentFixture<DetalleDeudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
