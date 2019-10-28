import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepeticoesService {
  
  repeticoes: Serie[] = [
    {
      id: 1,
      nome: "12 a 10"
    },
    {
      id: 2,
      nome: "15 a 20"
    },
    {
      id: 3,
      nome: "8 a 10"
    },
    {
      id: 4,
      nome: "6 a 8"
    }
  ];

  constructor() {}


  getRepeticoes(): any {
    return this.repeticoes;
  }

}
