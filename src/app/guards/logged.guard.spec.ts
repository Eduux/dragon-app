import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedGuard } from './logged.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [LoggedGuard]
    });
  });

  it('should ...', inject([LoggedGuard], (guard: LoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
