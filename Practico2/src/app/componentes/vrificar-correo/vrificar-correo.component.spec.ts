import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrificarCorreoComponent } from './vrificar-correo.component';

describe('VrificarCorreoComponent', () => {
  let component: VrificarCorreoComponent;
  let fixture: ComponentFixture<VrificarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrificarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrificarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
