import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLoggedInComponent } from './staff-logged-in.component';

describe('StaffLoggedInComponent', () => {
  let component: StaffLoggedInComponent;
  let fixture: ComponentFixture<StaffLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
