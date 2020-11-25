import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bLoggedInComponent } from './b2b-logged-in.component';

describe('B2bLoggedInComponent', () => {
  let component: B2bLoggedInComponent;
  let fixture: ComponentFixture<B2bLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2bLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
