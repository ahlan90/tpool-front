import { Component, OnInit } from '@angular/core';
import { Ficha } from '../../models/ficha';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professor } from '../../models/professor';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  novoProfessor: Professor;
  professorForm: FormGroup;

  constructor(
    private serieService: SerieService,
    private formBuilder: FormBuilder) {}
  
  ngOnInit(){

    this.novoProfessor = this.serieService.getFicha().professor;
    
    this.professorForm = this.formBuilder.group({
      nome: this.novoProfessor ? this.novoProfessor.nome : '',
      email: this.novoProfessor ? this.novoProfessor.email : '',
    });

  }

  saveProfessor(professorData) {
    this.novoProfessor = professorData;
    this.serieService.addProfessor(this.novoProfessor);
  }

}
