import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBrandComponent } from './client-brand.component';

describe('ClientBrandComponent', () => {
  let component: ClientBrandComponent;
  let fixture: ComponentFixture<ClientBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
