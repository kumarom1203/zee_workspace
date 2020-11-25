import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierActiveComponent } from './supplier-active.component';

describe('SupplierActiveComponent', () => {
  let component: SupplierActiveComponent;
  let fixture: ComponentFixture<SupplierActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
