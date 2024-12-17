import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detail/:id", component: DetailHeroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
