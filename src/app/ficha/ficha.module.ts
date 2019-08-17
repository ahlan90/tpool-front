import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoComponent } from './treino/treino.component';
import { TabsComponent } from './tabs/tabs.component';
import { InfoComponent } from './info/info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SerieComponent } from './serie/serie.component';
import { ExercicioComponent } from './exercicio/exercicio.component';



@NgModule({
  declarations: [
    TreinoComponent, 
    TabsComponent, 
    InfoComponent, SerieComponent, ExercicioComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    InfoComponent
  ]
})
export class FichaModule { }
