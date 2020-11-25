import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegistrationComponent } from './log-registration.component';

describe('LogRegistrationComponent', () => {
  let component: LogRegistrationComponent;
  let fixture: ComponentFixture<LogRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
