import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  
  seriesSubject = new BehaviorSubject<Serie[]>(null);
  series: Serie[] = [
    {
      id: 1,
      nome: "A"
    },
    {
      id: 2,
      nome: "B"
    },
    {
      id: 3,
      nome: "C"
    },
    {
      id: 4,
      nome: "D"
    }
  ];

  constructor() {
    this.seriesSubject.next(this.series);
  }

  getSeriesObservable(){
    return this.seriesSubject.asObservable();
  }

  add(serie: Serie){
    this.series.push(serie);
    this.seriesSubject.next(this.series);    
  }

  getSerie(id: string): any {
    return this.series.filter( x => x.id === Number(id))[0];
  }

}
