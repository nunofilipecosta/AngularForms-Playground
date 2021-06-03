import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { HouseEditGuard } from './house-edit.guard';

describe('HouseEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseEditGuard]
    });
  });

  it('should ...', inject([HouseEditGuard], (guard: HouseEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
