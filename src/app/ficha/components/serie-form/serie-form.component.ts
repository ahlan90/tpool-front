import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/ficha/services/serie.service';
import { Serie } from 'src/app/ficha/models/serie';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit{

  novaSerie: Serie;
  serieForm: FormGroup;
  listaSeries: Observable<Serie[]>;

  constructor(
    private serieService: SerieService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {

    this.serieForm = this.formBuilder.group({
      nome: '',
    });

  }

  addSerie(serieData) {
    this.novaSerie = serieData;
    this.serieService.add(this.novaSerie);
  }

}
