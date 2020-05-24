import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeRoutesComponent } from './escape-routes.component';

describe('EscapeRoutesComponent', () => {
  let component: EscapeRoutesComponent;
  let fixture: ComponentFixture<EscapeRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
