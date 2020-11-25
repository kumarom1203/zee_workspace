import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAgentActiveComponent } from './sub-agent-active.component';

describe('SubAgentActiveComponent', () => {
  let component: SubAgentActiveComponent;
  let fixture: ComponentFixture<SubAgentActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAgentActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAgentActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
