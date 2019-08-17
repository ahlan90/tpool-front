import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './ficha/info/info.component';
import { TabsComponent } from './ficha/tabs/tabs.component';


const routes: Routes = [
  { 
    path: 'ficha',
    component: TabsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
