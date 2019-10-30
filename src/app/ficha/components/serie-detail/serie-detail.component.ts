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

  constructor(
    private route: ActivatedRoute,
    private service: SerieService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.serie$ = this.service.getSerie(id);

    this.serie$.exercicios = [];
    this.add();
  }

  add(){

    let exercicio: Exercicio = {
      nome: '',
      repeticao: '',
      intervalo: '',
      observacao: ''
    }

    this.serie$.exercicios.push(exercicio);
  }

}
