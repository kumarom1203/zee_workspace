import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePromoComponent } from './mobile-promo.component';

describe('MobilePromoComponent', () => {
  let component: MobilePromoComponent;
  let fixture: ComponentFixture<MobilePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
