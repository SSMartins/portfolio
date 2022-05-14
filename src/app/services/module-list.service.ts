import { Injectable } from "@angular/core";
import { ModuleDetail } from "../models/modules-detail.modules";


@Injectable({
  providedIn: 'root'
})

export class ModuleListService
{

  moduleList: ModuleDetail[] = [
    {
        id: 1,
        title: 'HTML et CSS',
        description: 'Quelle que soit la technologie utilisée, le langage HTML est un passage obligé du milieu du développement web. En effet, le HTML est le ciment qui permet aux éléments d\'une page internet d\'être structurés. C\'est dire l`\'importance de ce langage et la nécessité de le connaître.',
        cardImg: './assets/img/html_css.png',
        buttonText: 'Voir Module',
    },

    {
        id: 2,
        title: "UX et UI Design",
        description: 'Le designer UI (design de l’interface utilisateur) s’occupe du lien entre la machine et l’homme. Le designer UX (design de l’expérience utilisateur) a pour objectif d’insérer du "storytelling" (mise en récit) dans une expérience d’utilisation pour faire naître de l’émotion chez l’internaute ; son rôle est donc plus stratégique.',
        cardImg: './assets/img/ux_ui.webp',
        buttonText: 'Voir Module',
    },

    {
        id: 3,
        title: "JavaScript",
        description: 'JavaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web.',
        cardImg: './assets/img/javascript.png',
        buttonText: 'Voir Module',
    },
    {
      id: 4,
      title: 'Angular 2+',
      description: 'Angular est un framework open source développé par la communauté de Google permettant de créer des Single Page Applications. Ce sont des applications Javascript qui ne tournent qu’au sein d’une seule et même page (souvent un fichier index.html). ',
      cardImg: './assets/img/angular.png',
      buttonText: 'Voir Module',
    },

    {
      id: 5,
      title: "SQL",
      description: 'SQL = Structured Query Language. Il s\'agit dans language de requête qui permet d\'interroger les bases de données',
      cardImg: './assets/img/sql.png',
      buttonText: 'Voir Module',
    },

  {
      id: 6,
      title: "PHP",
      description: 'PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n\'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.',
      cardImg: './assets/img/php.png',
      buttonText: 'Voir Module',
  }
  ];

  getAllModule() {
    return this.moduleList;
  }

  getModuleById(id:number): ModuleDetail[]{
    const module = this.moduleList.find(obj => obj.id === id);
    if(module){
      return[module];
    } else {
      return [];
    }
  }
}
