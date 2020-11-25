import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentUserListComponent } from './sub-agent-user-list.component';

describe('SubAgentUserListComponent', () => {
  let component: SubAgentUserListComponent;
  let fixture: ComponentFixture<SubAgentUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAgentUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAgentUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
