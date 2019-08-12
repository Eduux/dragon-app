import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon.service';
import { HttpClientModule } from '@angular/common/http';
import { doesNotThrow } from 'assert';

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

  it('listar dragões', (done) => {
    const service: DragonService = TestBed.get(DragonService)
    service.listDragons().then(res => {
      expect(res).not.toEqual(null);
      done();
    })
  });

  // it('listar dragão', (done) => {
  //   const service: DragonService = TestBed.get(DragonService)
  //   service.listDragon(60).then(res => {
  //     expect(res.name).toBe("Arthur");
  //     done();
  //   })
  // });

});
