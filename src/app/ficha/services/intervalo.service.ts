import { Intervalo } from './../models/intervalo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IntervaloService {

  private intervalosCollection: AngularFirestoreCollection<Intervalo>;
  intervalos: Observable<Intervalo[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.intervalosCollection = afs.collection<Intervalo>('intervalos', ref => ref.orderBy('id'));
    this.intervalos = this.intervalosCollection.valueChanges();
  }


  getIntervalos() {
    return this.intervalos;
  }

}
