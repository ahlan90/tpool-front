import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/ficha/services/serie.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[];

  constructor(private serieService: SerieService) {}

  ngOnInit() {

    this.serieService.getSeriesObservable().subscribe(res => {
      this.series = res;
    })

  }

  remove(id) {
    this.serieService.remove(id);
  }

}
