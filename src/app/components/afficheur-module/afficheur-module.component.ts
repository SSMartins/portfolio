import { Component, OnInit } from '@angular/core';
import { ModuleDetail } from 'src/app/models/modules-detail.modules';
import { ModuleListService } from 'src/app/services/module-list.service';


@Component({
  selector: 'app-afficheur-module',
  templateUrl: './afficheur-module.component.html',
  styleUrls: ['./afficheur-module.component.css']
})
export class AfficheurModuleComponent implements OnInit {

  ModuleCards!: ModuleDetail[];

  constructor(
    private moduleInfo: ModuleListService
  ) {console.log(this.moduleInfo)}

  ngOnInit(): void {
    this.ModuleCards = this.moduleInfo.getAllModule();

  }

}
