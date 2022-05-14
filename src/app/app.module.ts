import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import { CardComponent } from './components/card/card.component';
import { AfficheurModuleComponent } from './components/afficheur-module/afficheur-module.component';
import { ViewModuleComponent } from './modules/specific/view-module/view-module.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopNavComponent,
    CardComponent,
    AfficheurModuleComponent,
    ViewModuleComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    // requis pour changer la locale en FR
    constructor() {
      registerLocaleData(fr.default)
    }
}
