import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllegianceDetailComponent } from './allegiance-detail.component';

describe('AllegeanceDetailComponent', () => {
  let component: AllegianceDetailComponent;
  let fixture: ComponentFixture<AllegianceDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegianceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegianceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
