import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  
  seriesSubject = new BehaviorSubject<Serie[]>(null);

  series: Serie[] = [];

  index: number = 1;

  constructor() {
    this.seriesSubject.next(this.series);
  }

  getSeriesObservable(){
    return this.seriesSubject.asObservable();
  }

  add(serie: Serie){

    serie.id = this.index;

    this.index++;

    this.series.push(serie);
    this.seriesSubject.next(this.series);    
  }

  getSerie(id: string): any {
    return this.series.filter( x => x.id === Number(id))[0];
  }

  remove(id){
    this.series = this.series.filter( x => x.id != id);
    this.seriesSubject.next(this.series);
  }

}
