import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SerieService } from '../../services/serie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exercicio } from '../../models/exercicio';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie: Serie;

  step;

  idExercicio = 1;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.serieService.getItem(id).subscribe(res => {
      this.serie = res;
      this.step = this.serie.exercicios?.length || 0;
      this.addEmptyExercicio();
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextExercise() {
    this.updateSerie();
    this.addEmptyExercicio();
    this.step++;
  }

  updateSerie() {
    this.serieService.updateItem(this.serie);
  }

  addEmptyExercicio(){

    let exercicio: Exercicio = {
      id: this.idExercicio,
      nome: '',
      repeticao: '',
      intervalo: '',
      observacao: ''
    }

    this.idExercicio++;

    this.serie.exercicios = this.serie.exercicios || [];
    this.serie.exercicios.push(exercicio);
    
  }

  remove(id){
    this.serie.exercicios = this.serie.exercicios.filter( x => x.id != id);
  }

}
