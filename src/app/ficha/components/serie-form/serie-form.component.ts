import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/ficha/services/serie.service';
import { Serie } from 'src/app/ficha/models/serie';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent{

  novaSerie: Serie;
  serieForm: FormGroup;

  constructor(
    private serieService: SerieService,
    private formBuilder: FormBuilder,
  ) {

    this.serieForm = this.formBuilder.group({
      nome: '',
    });
  }

  addSerie(serieData) {
    this.novaSerie = serieData;

    console.log(this.novaSerie);
    
    this.serieService.add(this.novaSerie);
  }

}
