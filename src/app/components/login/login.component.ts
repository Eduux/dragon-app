import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// Sweet alert
import Swal from 'sweetalert2'

// Services
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: FormGroup;

  constructor(public fb: FormBuilder, public loginService: LoginService, public router: Router) {
    this.user = this.fb.group({
      login: [''],
      senha: ['']
    });
  }

  async logar(){
    if(await this.verificaForm()){
      this.loginService.logar(this.user.get('login').value, this.user.get('senha').value)
      .then(response => {
        //Swal.fire('Sucesso!', response, 'success'); 
        this.router.navigate(['home']);
      }).catch(err => {
        Swal.fire('Erro!', err, 'error'); 
      })
    }
  }

  verificaForm(){
    if(this.user.get('login').hasError('required')){
      Swal.fire('Erro!','Preencha o campo login','error'); 
      return false;
    }
    if(this.user.get('senha').hasError('required')){
      Swal.fire('Erro!','Preencha o campo senha','error'); 
      return false;
    }
    return true;
  }

}
