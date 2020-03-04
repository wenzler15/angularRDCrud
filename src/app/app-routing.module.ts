import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { GruposComponent } from './components/grupos/grupos.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "contato",
    component: ContatosComponent
  },
  {
    path: "grupos",
    component: GruposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
