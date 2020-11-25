import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bUserListComponent } from './b2b-user-list.component';

describe('B2bUserListComponent', () => {
  let component: B2bUserListComponent;
  let fixture: ComponentFixture<B2bUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2bUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
