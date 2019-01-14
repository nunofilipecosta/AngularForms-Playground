import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePageComponent } from './reactive-page.component';

describe('AboutPageComponent', () => {
  let component: ReactivePageComponent;
  let fixture: ComponentFixture<ReactivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
