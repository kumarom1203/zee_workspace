import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cCarComponent } from './b2c-car.component';

describe('B2cCarComponent', () => {
  let component: B2cCarComponent;
  let fixture: ComponentFixture<B2cCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
