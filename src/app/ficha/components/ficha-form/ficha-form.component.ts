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

  constructor(
    private service: SerieService) {}

  ngOnInit() {
    this.ficha$ = this.service.getFicha();
  }

}
