import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';

// Loader
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent implements OnInit {
  id: string;
  dragon: Dragon = {};

  constructor(public dragonService: DragonService, public route: ActivatedRoute,
    private spinner: NgxSpinnerService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
    })
    this.listDragon();
  }

  ngOnInit() {
  }

  listDragon(){
    this.spinner.show();
    this.dragonService.listDragon(this.id).then(response => {
      this.dragon = response;
      this.spinner.hide();
    })
  }

}
