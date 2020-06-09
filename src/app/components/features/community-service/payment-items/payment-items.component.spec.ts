import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItemsComponent } from './payment-items.component';

describe('PaymentItemsComponent', () => {
  let component: PaymentItemsComponent;
  let fixture: ComponentFixture<PaymentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
