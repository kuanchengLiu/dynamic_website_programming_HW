import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBorrowingComponent } from './facility-borrowing.component';

describe('FacilityBorrowingComponent', () => {
  let component: FacilityBorrowingComponent;
  let fixture: ComponentFixture<FacilityBorrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityBorrowingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
