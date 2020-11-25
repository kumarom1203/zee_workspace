import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreditLimitComponent } from './update-credit-limit.component';

describe('UpdateCreditLimitComponent', () => {
  let component: UpdateCreditLimitComponent;
  let fixture: ComponentFixture<UpdateCreditLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCreditLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCreditLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
