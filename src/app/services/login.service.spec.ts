import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('logar', () => {
    const service = new LoginService;
    service.logar('teste', '12qw').then(res => {
      expect(res).toBe('Logado com sucesso!');
    })
  });

  it('login inválido', () => {
    const service = new LoginService;
    service.logar('testes', '12qw').then(res => {
      expect(res).toBe('Login ou senha inválidos');
    })
  });
});
