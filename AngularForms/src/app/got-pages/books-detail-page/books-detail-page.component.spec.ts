import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooksDetailPageComponent } from './books-detail-page.component';

describe('BooksDetailPageComponent', () => {
  let component: BooksDetailPageComponent;
  let fixture: ComponentFixture<BooksDetailPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
