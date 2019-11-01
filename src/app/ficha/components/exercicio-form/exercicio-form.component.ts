import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';
import { IntervaloService } from '../../services/intervalo.service';
import { RepeticoesService } from '../../services/repeticoes.service';

@Component({
  selector: 'app-exercicio-form',
  templateUrl: './exercicio-form.component.html',
  styleUrls: ['./exercicio-form.component.css']
})
export class ExercicioFormComponent implements OnInit {

  execicioControl = new FormControl();

  dropExercicios: any[];

  dropRepeticoes: any[];

  dropIntervalo: any[];

  @Input() exercicio: Exercicio;
  
  constructor(
    private exercicioService: ExercicioService,
    private intervaloService: IntervaloService,
    private repeticoesService: RepeticoesService
    ) { }

  ngOnInit() {
    this.dropExercicios = this.exercicioService.getNomeExercicios();
    this.dropIntervalo = this.intervaloService.getIntervalos();
    this.dropRepeticoes = this.repeticoesService.getRepeticoes();
  }

  add(){}

  remove(){}

}
