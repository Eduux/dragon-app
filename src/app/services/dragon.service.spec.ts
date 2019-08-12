import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { HttpClientModule } from '@angular/common/http';

describe('DragonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: DragonService = TestBed.get(DragonService);
    expect(service).toBeTruthy();
  });
});
