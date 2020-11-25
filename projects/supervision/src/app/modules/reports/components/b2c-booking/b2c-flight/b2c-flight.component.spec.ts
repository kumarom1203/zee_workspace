import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cFlightComponent } from './b2c-flight.component';

describe('B2cFlightComponent', () => {
  let component: B2cFlightComponent;
  let fixture: ComponentFixture<B2cFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
