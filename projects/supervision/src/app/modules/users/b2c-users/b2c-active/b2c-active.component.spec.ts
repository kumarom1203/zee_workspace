import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cActiveComponent } from './b2c-active.component';

describe('B2cActiveComponent', () => {
  let component: B2cActiveComponent;
  let fixture: ComponentFixture<B2cActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
