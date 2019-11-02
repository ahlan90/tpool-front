import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieFormComponent } from './serie-form/serie-form.component';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SeriePageComponent } from '../containers/serie-page/serie-page.component';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';
import { RouterModule } from '@angular/router';
import { FichaPrintComponent } from './ficha-print/ficha-print.component';
import { FichaFormComponent } from './ficha-form/ficha-form.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';


@NgModule({
  declarations: [
    SeriePageComponent,
    SerieDetailComponent,
    SerieFormComponent,
    SerieListComponent,
    SeriePageComponent,
    ExercicioFormComponent,
    FichaPrintComponent,
    FichaFormComponent,
    ProfessorFormComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class FichaModule { }
