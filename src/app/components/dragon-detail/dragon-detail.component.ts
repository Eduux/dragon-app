import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';

// Loader
import { NgxSpinnerService } from 'ngx-spinner';

// Sweet alert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent {
  id: string;
  dragon: Dragon = {};

  constructor(public dragonService: DragonService, public route: ActivatedRoute,
    private spinner: NgxSpinnerService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
    })
    this.listDragon();
  }

  listDragon(){
    this.spinner.show();
    this.dragonService.listDragon(this.id).then(response => {
      this.dragon = response;
      this.spinner.hide();
    }).catch(err => {
      console.log(err);
      this.spinner.hide();
      Swal.fire('Erro!', err, 'error');
    })
  }

}
