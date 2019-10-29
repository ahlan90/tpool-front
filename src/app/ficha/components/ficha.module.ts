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


@NgModule({
  declarations: [
    SeriePageComponent,
    SerieDetailComponent,
    SerieFormComponent,
    SerieListComponent,
    SeriePageComponent,
    ExercicioFormComponent
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
