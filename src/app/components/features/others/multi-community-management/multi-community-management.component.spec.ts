import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCommunityManagementComponent } from './multi-community-management.component';

describe('MultiCommunityManagementComponent', () => {
  let component: MultiCommunityManagementComponent;
  let fixture: ComponentFixture<MultiCommunityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCommunityManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCommunityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
