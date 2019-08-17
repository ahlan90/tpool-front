import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieComponent } from './ficha/serie/serie.component';


const routes: Routes = [
  { 
    path: 'ficha',
    component: SerieComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
