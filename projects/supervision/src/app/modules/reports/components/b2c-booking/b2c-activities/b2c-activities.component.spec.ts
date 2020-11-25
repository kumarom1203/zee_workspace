import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cActivitiesComponent } from './b2c-activities.component';

describe('B2cActivitiesComponent', () => {
  let component: B2cActivitiesComponent;
  let fixture: ComponentFixture<B2cActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
