import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bActiveComponent } from './b2b-active.component';

describe('B2bActiveComponent', () => {
  let component: B2bActiveComponent;
  let fixture: ComponentFixture<B2bActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2bActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
