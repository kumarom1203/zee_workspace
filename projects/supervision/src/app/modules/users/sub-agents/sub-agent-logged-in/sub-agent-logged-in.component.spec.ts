import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentLoggedInComponent } from './sub-agent-logged-in.component';

describe('SubAgentLoggedInComponent', () => {
  let component: SubAgentLoggedInComponent;
  let fixture: ComponentFixture<SubAgentLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAgentLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAgentLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
