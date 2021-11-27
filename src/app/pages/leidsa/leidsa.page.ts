import { Component, OnInit } from '@angular/core';
import { LoteriaService } from 'src/app/services/loteria.service';
import { Leidsa } from '../../models/leidsa.model';

@Component({
  selector: 'app-leidsa',
  templateUrl: './leidsa.page.html',
  styleUrls: ['./leidsa.page.scss'],
})
export class LeidsaPage implements OnInit {
  leidsa: Leidsa;
  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getLeidsa().subscribe(l => {
      this.leidsa = l.data;
      console.log(l);
    });
  }


}
