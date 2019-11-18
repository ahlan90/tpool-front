import { Exercicio } from './../models/exercicio';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  private exerciciosCollection: AngularFirestoreCollection<Exercicio>;
  exerciciosObservable: Observable<Exercicio[]>;
  exercicios: Exercicio[];

  constructor(
    private afs: AngularFirestore
  ) {
    this.exerciciosCollection = afs.collection<Exercicio>('exercicio-nomes', ref => ref.orderBy('nome'));

  }


  getNomeExercicios() {
    this.exerciciosObservable = this.exerciciosCollection.valueChanges();
    return this.exerciciosObservable;
  }

}
