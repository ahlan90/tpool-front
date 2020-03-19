import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ficha } from '../models/ficha';
import { Professor } from '../models/professor';
import { Aluno } from '../models/aluno';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SerieService {  
  
  private seriesCollection: AngularFirestoreCollection<Serie>;
  seriesObservable: Observable<Serie[]>;
  series: Serie[];

  seriesSubject = new BehaviorSubject<Serie[]>(null);

  index: number = 1;

  constructor(
    private afs: AngularFirestore
  ) {
  }

  getSeriesObservable() {
    return this.seriesSubject.asObservable();
  }

  add(serie: Serie) {

  }

  getSerie(id: string): any {
  }

  remove(id) {

  }

  getFicha() {
  }

  addProfessor(professor: Professor){
  }

  addAluno(novoAluno: Aluno) {
  }

}
