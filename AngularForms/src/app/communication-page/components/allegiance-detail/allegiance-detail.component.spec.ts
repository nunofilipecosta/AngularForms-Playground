import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegeanceDetailComponent } from './allegiance-detail.component';

describe('AliasDetailComponent', () => {
  let component: AllegeanceDetailComponent;
  let fixture: ComponentFixture<AllegeanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegeanceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegeanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
