import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User

  constructor() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }

  // Retorna user logado
  public get userLogado(): User {
    return this.user;
  }

  // Seta storage
  logar(login, senha){
    return new Promise<string>((resolve, reject) =>{
      if(login == 'teste' && senha == '12qw'){
        localStorage.setItem('currentUser', JSON.stringify({login: login}));
        this.user = {login: login};
        resolve('Logado com sucesso!');
      } else {
        reject('Login ou senha inválidos');
      }
    })
  }

  logout() {
      // Remove user do storage
      localStorage.removeItem('userDragon');
      this.user = null;
  }
}
