import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HousesPageComponent } from './houses-page.component';

describe('HousesPageComponent', () => {
  let component: HousesPageComponent;
  let fixture: ComponentFixture<HousesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
