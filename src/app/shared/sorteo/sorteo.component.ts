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
    const hoy = new Date().toLocaleDateString();
    return fecha.replace('-','/').replace('-','/') === hoy;
  }

  isNumber(numero: string){
    return !isNaN(Number(numero));
  }

}
