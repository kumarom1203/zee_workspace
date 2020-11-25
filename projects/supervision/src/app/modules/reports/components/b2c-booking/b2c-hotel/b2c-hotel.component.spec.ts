import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cHotelComponent } from './b2c-hotel.component';

describe('B2cHotelComponent', () => {
  let component: B2cHotelComponent;
  let fixture: ComponentFixture<B2cHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
