import { Component } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { Dragon } from 'src/app/models/dragon';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { FormGroup, FormBuilder } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

// Sweet alert
import Swal from 'sweetalert2'
// Loader
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent {
  user: User;
  dragons: Dragon[];
  dragonN: FormGroup;
  modal: boolean = false;

  constructor(public dragonService: DragonService, public router: Router,
    private spinner: NgxSpinnerService, public loginService: LoginService, public fb: FormBuilder) {
    this.listDragons();
    this.user = this.loginService.userLogado;
    this.dragonN = this.fb.group({
      name: [''],
      type: ['']
    });
  }

  // Lista todos os dragoes por ordem alfabética orderna('nomedapropriedade')
  listDragons(){
    this.spinner.show();
    this.dragonService.listDragons()
    .then(response => {
      this.dragons = response;
      this.dragons.sort(this.ordena("name"));
      this.spinner.hide();
    }).catch(err => {
      console.log(err);
      this.spinner.hide();
      Swal.fire('Erro!', err, 'error');
    })
  }

  // Verifica o formulário
  verificaForm(){
    if(this.dragonN.get('name').hasError('required')){
      Swal.fire('Erro!','Preencha o campo nome','error'); 
      return false;
    }
    if(this.dragonN.get('type').hasError('required')){
      Swal.fire('Erro!','Preencha o campo tipo','error'); 
      return false;
    }

    return true;
  }

  // Cadastrando Dragão
  async newDragon(){
    if(await this.verificaForm()){
      this.dragonService.newDragon(this.dragonN.get('name').value, this.dragonN.get('type').value)
      .then(response => {
        this.dragons.push(response);
        this.dragons.sort(this.ordena("name"));
        this.modal = false;
        Swal.fire('Sucesso!', 'Dragão cadastrado com sucesso!', 'success'); 
      }).catch(err => {
        Swal.fire('Erro!', err, 'error'); 
      })
    }
  }


  // Deletar dragão
  deleteDragon(id, index){
    console.log(index)
    Swal.fire({
      title: 'Tem certeza?',
      text: "Deseja excluir o dragão?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      if(response.value){
        this.dragonService.deletedragon(id)
        .then(response => {
          console.log(response);
          this.dragons.splice(index, 1); 
          Swal.fire(
            'Deletado',
            'Dragão deletado com sucesso!',
            'success'
          )
        }).catch(err => {
          console.log(err);
          Swal.fire('Erro!', err, 'error');
        })
      }
    })
  }

  // Função para ordenar os dragões pela propriedade
  ordena(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          if(sortOrder == -1){
              return b[property].toString().localeCompare(a[property]);
          }else{
              return a[property].toString().localeCompare(b[property]);
          }        
      }
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
