import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterDetailComponent } from './characters-detail-page.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
