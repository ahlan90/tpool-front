import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriePageComponent } from './ficha/containers/serie-page/serie-page.component';
import { SerieDetailComponent } from './ficha/components/serie-detail/serie-detail.component';
import { FichaPrintComponent } from './ficha/components/ficha-print/ficha-print.component';
import { FichaFormComponent } from './ficha/components/ficha-form/ficha-form.component';
import { AlunoFormComponent } from './ficha/components/aluno-form/aluno-form.component';
import { ProfessorFormComponent } from './ficha/components/professor-form/professor-form.component';
import { LoginComponent } from './core/components/login/login.component';


const routes: Routes = [
  { 
    path: '',
    component: SeriePageComponent 
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'serie/:id',
    component: SerieDetailComponent 
  },
  { 
    path: 'ficha-form',
    component: FichaFormComponent 
  },
  { 
    path: 'ficha-print',
    component: FichaPrintComponent 
  },
  {
    path: 'aluno',
    component: AlunoFormComponent
  },
  {
    path: 'professor',
    component: ProfessorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
