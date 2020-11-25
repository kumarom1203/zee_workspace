import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleStatsComponent } from './module-stats.component';

describe('ModuleStatsComponent', () => {
  let component: ModuleStatsComponent;
  let fixture: ComponentFixture<ModuleStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
