import { Component, Input, OnInit } from '@angular/core';
import { ModuleCard } from 'src/app/models/modules.model';

import { NavigationExtras,Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() moduleInfo!: ModuleCard;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  seeModule() {
    let navigation: NavigationExtras = {
      queryParams: {}
    };
    this.router.navigate(['/view-module/' + this.moduleInfo.id], navigation);
  }

}
