import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Sorteo } from 'src/app/models/sorteo.model';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss'],
})
export class SorteoComponent implements OnInit {
  @Input() sorteos: Sorteo[];
  constructor() { }

  ngOnInit() {}

  isHoy(fecha: string){
    const fechaActual = formatDate(new Date(), 'dd-MM-yyyy', 'en');
    return fechaActual === fecha;
  }

  isNumber(numero: string){
    return !isNaN(Number(numero));
  }

}
