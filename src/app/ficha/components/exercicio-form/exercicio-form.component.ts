import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Exercicio } from '../../models/exercicio';
import { ExercicioService } from '../../services/exercicio.service';

@Component({
  selector: 'app-exercicio-form',
  templateUrl: './exercicio-form.component.html',
  styleUrls: ['./exercicio-form.component.css']
})
export class ExercicioFormComponent implements OnInit {

  execicioControl = new FormControl();

  nomesExercicios: any[];

  @Input() exercicio: Exercicio;

  constructor(private exercicioService: ExercicioService) { }

  ngOnInit() {
    this.nomesExercicios = this.exercicioService.getNomeExercicios();
  }

  add(){}
}
