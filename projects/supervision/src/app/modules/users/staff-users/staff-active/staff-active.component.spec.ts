import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffActiveComponent } from './staff-active.component';

describe('StaffActiveComponent', () => {
  let component: StaffActiveComponent;
  let fixture: ComponentFixture<StaffActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
