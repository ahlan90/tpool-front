import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { FormBuilder } from '@angular/forms';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent{

  novaSerie: Serie;
  series;
  serieForm;

  constructor(
    private serieService: SerieService
  ) {
    this.series = this.serieService.getAll();
    this.novaSerie = new Serie("");
  }

  addSerie() {
    console.log('Submit');
    
    this.serieService.add(this.novaSerie);
  }

}
