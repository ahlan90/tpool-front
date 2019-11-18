import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Repeticao } from '../models/repeticao';

@Injectable({
  providedIn: 'root'
})
export class RepeticoesService {

  private repeticoesCollection: AngularFirestoreCollection<Repeticao>;
  repeticoes: Observable<Repeticao[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.repeticoesCollection = afs.collection<Repeticao>('repeticoes', ref => ref.orderBy('id'));
    this.repeticoes = this.repeticoesCollection.valueChanges();
  }


  getRepeticoes() {
    return this.repeticoes;
  }

}
