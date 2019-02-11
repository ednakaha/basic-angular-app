import { TestBed, async, inject } from '@angular/core/testing';

import { AutoGuard } from './auto.guard';

describe('AutoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoGuard]
    });
  });

  it('should ...', inject([AutoGuard], (guard: AutoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
