import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cUserListComponent } from './b2c-user-list.component';

describe('B2cUserListComponent', () => {
  let component: B2cUserListComponent;
  let fixture: ComponentFixture<B2cUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
