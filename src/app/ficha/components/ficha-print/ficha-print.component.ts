import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../services/serie.service';
import { Ficha } from '../../models/ficha';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ficha-print',
  templateUrl: './ficha-print.component.html',
  styleUrls: ['./ficha-print.component.css']
})
export class FichaPrintComponent implements OnInit {

  ficha$: Ficha;

  showInfoAluno = false;
  showInfoProfessor = false;

  constructor(
    private service: SerieService) {}

  ngOnInit() {
    this.ficha$ = this.service.getFicha();
  }

  public captureScreen() {

    const data = document.getElementById('ficha');

    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 200;
      const imgHeight = canvas.height * imgWidth / canvas.width;


      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');

      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 5, 5, imgWidth, imgHeight);
      pdf.save('teste.pdf'); // Generated pdf
    });
  }
}
