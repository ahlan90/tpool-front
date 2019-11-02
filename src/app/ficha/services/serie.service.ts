import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import { BehaviorSubject } from 'rxjs';
import { Ficha } from '../models/ficha';
import { Professor } from '../models/professor';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class SerieService {


  ficha: Ficha = {
    aluno: null,
    professor: null,
    series: [
      {
        id: 1,
        nome: "A",
        exercicios: [
          {
            nome: "Supino Reto",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Supino Declinado",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Voador",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Crucifixo",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          }
        ]
      },
      {
        id: 2,
        nome: "B",
        exercicios: [
          {
            nome: "Cavalinho",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Pulldown",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Remada Baixa",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          },
          {
            nome: "Levantamento Terra",
            repeticao: "3 x 10",
            intervalo: "30s",
            observacao: ""
          }
        ]
      }
    ]
  };

  seriesSubject = new BehaviorSubject<Serie[]>(null);

  index: number = 1;

  constructor() {
    this.seriesSubject.next(this.ficha.series);
  }

  getSeriesObservable() {
    return this.seriesSubject.asObservable();
  }

  add(serie: Serie) {

    serie.id = this.index;

    this.index++;

    this.ficha.series.push(serie);
    this.seriesSubject.next(this.ficha.series);
  }

  getSerie(id: string): any {
    return this.ficha.series.filter(x => x.id === Number(id))[0];
  }

  remove(id) {
    this.ficha.series = this.ficha.series.filter(x => x.id != id);
    this.seriesSubject.next(this.ficha.series);
  }

  getFicha() {
    return this.ficha;
  }

  addProfessor(professor: Professor){
    this.ficha.professor = professor;
  }

  addAluno(novoAluno: Aluno) {
    this.ficha.aluno = novoAluno;
  }

}
