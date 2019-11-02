import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../services/serie.service';
import { Ficha } from '../../models/ficha';

@Component({
  selector: 'app-ficha-print',
  templateUrl: './ficha-print.component.html',
  styleUrls: ['./ficha-print.component.css']
})
export class FichaPrintComponent implements OnInit {

  ficha$: Ficha;

  constructor(
    private service: SerieService) {}

  ngOnInit() {
    this.ficha$ = this.service.getFicha();
  }
}
