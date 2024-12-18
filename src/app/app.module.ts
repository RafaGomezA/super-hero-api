import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonHeaderComponent } from './components/button-header/button-header.component';
import { ButtonDetailComponent } from './components/button-detail/button-detail.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FiltroComponent } from './components/filtro/filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    ButtonDetailComponent,
    DetailHeroComponent,
    BuscadorComponent,
    FiltroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
