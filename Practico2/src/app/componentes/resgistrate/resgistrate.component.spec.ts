import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrateComponent } from './resgistrate.component';

describe('ResgistrateComponent', () => {
  let component: ResgistrateComponent;
  let fixture: ComponentFixture<ResgistrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
