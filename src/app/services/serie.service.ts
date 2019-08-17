import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  
  series: Serie[] = [];

  constructor() {
    let serie1 = new Serie("Serie A");
    this.series.push(serie1);
  }

  getAll(): Serie[] {
    return this.series;
  }

  add(serie: Serie){
    //console.log('Add: ' + serie.nome);
    
    this.series.push(serie);
  }
}
