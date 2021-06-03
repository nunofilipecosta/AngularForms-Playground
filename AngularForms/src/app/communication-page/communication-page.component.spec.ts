import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommunicationPageComponent } from './communication-page.component';

describe('CommunicationPageComponent', () => {
  let component: CommunicationPageComponent;
  let fixture: ComponentFixture<CommunicationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.data.length).toBe(3);
    expect(component).toBeTruthy();
  });
});
