import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialListaComponent } from './historial-lista.component';

describe('HistorialListaComponent', () => {
  let component: HistorialListaComponent;
  let fixture: ComponentFixture<HistorialListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
