import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('logar', (done) => {
    const service: LoginService = TestBed.get(LoginService);
    service.logar('teste', '12qw').then(res => {
      expect(res).toBe('Logado com sucesso!');
      done();
    })
  });

});
