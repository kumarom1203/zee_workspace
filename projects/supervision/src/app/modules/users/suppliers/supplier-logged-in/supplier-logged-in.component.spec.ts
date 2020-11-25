import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLoggedInComponent } from './supplier-logged-in.component';

describe('SupplierLoggedInComponent', () => {
  let component: SupplierLoggedInComponent;
  let fixture: ComponentFixture<SupplierLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
