import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Login service
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(public router: Router, public loginService: LoginService){}

  canActivate(): boolean {
    if (!this.loginService.userLogado) this.router.navigate(['login']);
    return this.loginService.userLogado ? true : false
  }
  
}
