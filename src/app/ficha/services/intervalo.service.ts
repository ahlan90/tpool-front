import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervaloService {

  intervalos: any[] = [
    {
      id: 1,
      nome: "10s"
    },
    {
      id: 2,
      nome: "30s"
    },
    {
      id: 3,
      nome: "45s"
    },
    {
      id: 4,
      nome: "60s"
    },
    {
      id: 4,
      nome: "90s"
    }
  ];

  constructor() {}

  getIntervalos(): any {
    return this.intervalos;
  }

}
