import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Exercicio } from '../models/exercicio';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  
  exercicioSubject = new BehaviorSubject<Exercicio[]>(null);
  exercicios: Exercicio[] = [];

  nomesExercicios: any[] = [
    {
      id: 1,
      nome: "Supino Reto"
    },
    {
      id: 2,
      nome: "Supino Declinado"
    },
    {
      id: 3,
      nome: "Supino Inclinado"
    },
    {
      id: 4,
      nome: "Leg Press"
    },
    {
      id: 5,
      nome: "Voador"
    },
    {
      id: 6,
      nome: "Remada Alta"
    },
  ];

  constructor() {
    this.exercicioSubject.next(this.exercicios);
  }

  getExerciciosObservable(){
    return this.exercicioSubject.asObservable();
  }

  add(exercicio: Exercicio){
    this.exercicios.push(exercicio);
    this.exercicioSubject.next(this.exercicios);    
  }

  getExercicios(id: string): any {
    return this.exercicios.filter( x => x.id === Number(id))[0];
  }

  getNomeExercicios(){
    return this.nomesExercicios;
  }
}
