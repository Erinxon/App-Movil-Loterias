import { Component, OnInit } from '@angular/core';
import { Anguila } from 'src/app/models/anguila.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-anguila',
  templateUrl: './anguila.page.html',
  styleUrls: ['./anguila.page.scss'],
})
export class AnguilaPage implements OnInit {
  anguila: Anguila;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getAmericanas().subscribe(a => {
      this.anguila = a.data;
    });
  }


}
