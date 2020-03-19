import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ficha } from '../../models/ficha';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-ficha-form',
  templateUrl: './ficha-form.component.html',
  styleUrls: ['./ficha-form.component.css']
})
export class FichaFormComponent implements OnInit {

  ficha$: Ficha;
  alunoForm: FormGroup;
  professorForm: FormGroup;

  constructor(
    private service: SerieService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.alunoForm = this.formBuilder.group({
      nome : '',
    });

    this.professorForm = this.formBuilder.group({
      nome: '',
      email: '',
      telefone: ''
    });

    //this.ficha$ = this.service.getFicha();
  }

  addProfessorInfo(value) {
    console.log('Professor', value);
  }

  addAlunoInfo(value) {
    console.log('Aluno', value);
  }

}
