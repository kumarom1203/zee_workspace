import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBlogComponent } from './story-blog.component';

describe('StoryBlogComponent', () => {
  let component: StoryBlogComponent;
  let fixture: ComponentFixture<StoryBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
