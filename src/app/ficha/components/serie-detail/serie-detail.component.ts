import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SerieService } from '../../services/serie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exercicio } from '../../models/exercicio';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie$;

  step = 0;

  idExercicio = 1;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.serie$ = this.serieService.getSerie(id);

    this.serie$.exercicios = [];
    this.add();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextExercise() {
    this.add();
    this.step++;
  }

  add(){

    let exercicio: Exercicio = {
      id: this.idExercicio,
      nome: '',
      repeticao: '',
      intervalo: '',
      observacao: ''
    }

    this.idExercicio++;

    this.serie$.exercicios.push(exercicio);
    
  }

  remove(id){
    this.serie$.exercicios = this.serie$.exercicios.filter( x => x.id != id);
  }

}
