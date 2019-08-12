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
  modalEdit: boolean = false;
  index: number;

  constructor(public dragonService: DragonService, public router: Router,
    private spinner: NgxSpinnerService, public loginService: LoginService, public fb: FormBuilder) {

    // Listar dragoes
    this.listDragons();

    // Get user logado para mostar login
    this.user = this.loginService.userLogado;

    // Form builder para melhor validação dos campos
    this.dragonN = this.fb.group({
      id: [''],
      name: [''],
      type: ['']
    });
  }

  // Lista todos os dragoes por ordem alfabética orderna('nomedapropriedade')
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

  // Verifica o formulário para nao deixar preencher vazio
  verificaForm(name, type){
    if(name){
      Swal.fire('Erro!','Preencha o campo nome','error'); 
      return false;
    }
    if(type){
      Swal.fire('Erro!','Preencha o campo tipo','error'); 
      return false;
    }

    return true;
  }

  // Cadastrando Dragão
  async newDragon(){
    if(await this.verificaForm(this.dragonN.get('name').hasError('required'), this.dragonN.get('type').hasError('required'))){
      this.dragonService.newDragon(this.dragonN.get('name').value, this.dragonN.get('type').value)
      .then(response => {
        this.dragons.push(response);
        this.dragons.sort(this.ordena("name"));
        this.modal = false;
        this.dragonN.controls["name"].setValue("");
        this.dragonN.controls["type"].setValue("");
        Swal.fire('Sucesso!', 'Dragão cadastrado com sucesso!', 'success'); 
      }).catch(err => {
        Swal.fire('Erro!', err, 'error'); 
      })
    }
  }

  // Abre modal dragão e preenche para edicao
  async openEdit(index, dragon){
    this.modalEdit = true;
    this.index = index; 
    this.dragonN.controls["id"].setValue(dragon.id);
    this.dragonN.controls["name"].setValue(dragon.name);
    this.dragonN.controls["type"].setValue(dragon.type);
  }

  // Editando dragão
  async editDragon(){
    let dragon = {
      id: this.dragonN.get('id').value,
      name: this.dragonN.get('name').value,
      type: this.dragonN.get('type').value
    }
    if(await this.verificaForm(this.dragonN.get('name').hasError('required'), this.dragonN.get('type').hasError('required'))){
      this.dragonService.editDragon(dragon)
      .then(response => {
        console.log(response);
        this.dragons[this.index] = response;
        this.dragons.sort(this.ordena("name"));
        this.modalEdit = false;
        this.dragonN.controls["id"].setValue("");
        this.dragonN.controls["name"].setValue("");
        this.dragonN.controls["type"].setValue("");
        Swal.fire('Sucesso!', 'Dragão editado com sucesso!', 'success'); 
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
