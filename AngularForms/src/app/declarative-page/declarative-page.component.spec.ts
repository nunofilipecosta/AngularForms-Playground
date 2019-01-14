import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarativePageComponent } from './declarative-page.component';

describe('DeclarativePageComponent', () => {
  let component: DeclarativePageComponent;
  let fixture: ComponentFixture<DeclarativePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarativePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
