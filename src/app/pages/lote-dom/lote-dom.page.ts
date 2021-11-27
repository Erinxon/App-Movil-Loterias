import { Component, OnInit } from '@angular/core';
import { LoteDom } from 'src/app/models/loteDom.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-lote-dom',
  templateUrl: './lote-dom.page.html',
  styleUrls: ['./lote-dom.page.scss'],
})
export class LoteDomPage implements OnInit {
  loteDom: LoteDom;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getLoteDom().subscribe(l => {
      this.loteDom = l.data;
    });
  }


}
