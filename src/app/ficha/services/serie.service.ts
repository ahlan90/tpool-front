import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ficha } from '../models/ficha';
import { Professor } from '../models/professor';
import { Aluno } from '../models/aluno';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  
  private itemsCollection: AngularFirestoreCollection<Serie>;
  items: Observable<Serie[]>;
  itemsSize;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Serie>('series', ref => ref.orderBy('ordem'));
    this.items = this.itemsCollection.valueChanges({ idField: 'serieId' });
  }

  addItem(item: Serie) {
    this.itemsCollection.add(item).then(() => {
      item.ordem = this.itemsSize;
    });
  }

  getItems() {
    return this.items.pipe(
      tap(res => {
        this.itemsSize = res.length;
        console.log(this.itemsSize);
        
      })
    );
  }

  getItem(id: string): Observable<Serie> {
    return this.itemsCollection.doc<Serie>(`/${id}`).valueChanges().pipe(
      map(res => {
        let serie: Serie = res;
        serie.serieId = id;
        return serie
      })
    );
  }

  removeItem(id) {
    this.itemsCollection.doc<Serie>(`/${id}`).delete();
  }

  updateItem(serie: Serie) {    
    this.itemsCollection.doc<Serie>(`/${serie.serieId}`).update(serie);
  }


  // addProfessor(professor: Professor){
  // }

  // addAluno(novoAluno: Aluno) {
  // }

}
