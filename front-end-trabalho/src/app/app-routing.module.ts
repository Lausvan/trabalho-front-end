import { CadastroPacienteComponent } from './layout/cadastro-paciente/cadastro-paciente.component';
import { HomeComponent } from './layout/home/home.component';
import { CadastroComponent } from './layout/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-paciente', component: CadastroPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
