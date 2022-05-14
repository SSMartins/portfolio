import { Component, OnInit } from '@angular/core';
import { ModuleCard } from 'src/app/models/modules.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleHeader!: string;
  srcImg!: string;

  html_css!: ModuleCard;
  ux_ui!: ModuleCard;
  javascript!: ModuleCard;
  angular!: ModuleCard;
  sql!: ModuleCard;
  php!: ModuleCard;

  ngOnInit(): void {

    this.html_css = new ModuleCard(
      1,
      'HTML/CSS',
      'Quelle que soit la technologie utilisée, le langage HTML est un passage obligé du milieu du développement web. En effet, le HTML est le ciment qui permet aux éléments d\'une page internet d\'être structurés. C\'est dire l\'importance de ce langage et la nécessité de le connaître.',
      './assets/img/html_css.png',
      'Voir Module',
    );

    this.ux_ui= new ModuleCard(
      2,
      'UX et UI Design"',
      'Le designer UI (design de l’interface utilisateur) s’occupe du lien entre la machine et l’homme. Le designer UX (design de l’expérience utilisateur) a pour objectif d’insérer du "storytelling" (mise en récit) dans une expérience d’utilisation pour faire naître de l’émotion chez l’internaute ; son rôle est donc plus stratégique.',
      './assets/img/ux_ui.webp',
      'Voir Module',
    );

    this.javascript = new ModuleCard(
      3,
      'JavaScript',
      'JavaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web.',
      './assets/img/javascript.png',
      'Voir Module',
    );

    this.angular = new ModuleCard(
      4,
      'Angular 2+',
      'Angular est un framework open source développé par la communauté de Google permettant de créer des Single Page Applications. Ce sont des applications Javascript qui ne tournent qu’au sein d’une seule et même page (souvent un fichier index.html). ',
      './assets/img/angular.png',
      'Voir Module',
    );

    this.sql = new ModuleCard(
      5,
      'SQL',
      'SQL = Structured Query Language. Il s\'agit dans language de requête qui permet d\'interroger les bases de données',
      './assets/img/sql.png',
      'Voir Module',
    );

    this.php = new ModuleCard(
      6,
      'PHP',
      'PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n\'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.',
      './assets/img/php.png',
      'Voir Module',
    );
  }

}
