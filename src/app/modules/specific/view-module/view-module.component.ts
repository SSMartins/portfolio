import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleDetail } from 'src/app/models/modules-detail.modules';
import { ModuleListService } from 'src/app/services/module-list.service';

@Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent implements OnInit {

  requestedUrlParams: any;
  resquestUrlQueryParams: any;
  module!: ModuleDetail[];
  titleHeader!: string;
  srcImg!: string;

  constructor(
    private requestedUrl: ActivatedRoute,
    private moduleList: ModuleListService,
  ) { }

  ngOnInit(): void {
   // on récupère l'id transmise par url
    this.resquestUrlQueryParams = this.requestedUrl.params.subscribe(params => {
      console.log(params);
      let id = params["id"];

      if(id) {
        this.module = this.moduleList.getModuleById(parseInt(id));
      }

      if(this.module.length){
        this.titleHeader="";
        this.srcImg = this.module[0].cardImg;
      }
    })
  }

}
