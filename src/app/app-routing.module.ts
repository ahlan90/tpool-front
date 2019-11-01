import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriePageComponent } from './ficha/containers/serie-page/serie-page.component';
import { SerieDetailComponent } from './ficha/components/serie-detail/serie-detail.component';
import { FichaPrintComponent } from './ficha/components/ficha-print/ficha-print.component';


const routes: Routes = [
  { 
    path: '',
    component: SeriePageComponent 
  },
  { 
    path: 'serie/:id',
    component: SerieDetailComponent 
  },
  { 
    path: 'ficha-print',
    component: FichaPrintComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
