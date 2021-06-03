import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharactersTabComponent } from './characters-tab.component';

describe('CharactersTabComponent', () => {
  let component: CharactersTabComponent;
  let fixture: ComponentFixture<CharactersTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
