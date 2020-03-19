import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  novoAluno: Aluno;
  alunoForm: FormGroup;

  constructor(
    private serieService: SerieService,
    private formBuilder: FormBuilder) {}
  
  ngOnInit(){

    //this.novoAluno = this.serieService.getFicha().aluno;
    
    this.alunoForm = this.formBuilder.group({
      nome: this.novoAluno ? this.novoAluno.nome : '',
      email: this.novoAluno ? this.novoAluno.email : '',
    });

  }

  saveAluno(alunoData) {
    this.novoAluno = alunoData;
    //this.serieService.addAluno(this.novoAluno);
  }
}
