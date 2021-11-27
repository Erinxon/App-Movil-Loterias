import { Component, OnInit } from '@angular/core';
import { Loteka } from 'src/app/models/loteka.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-loteka',
  templateUrl: './loteka.page.html',
  styleUrls: ['./loteka.page.scss'],
})
export class LotekaPage implements OnInit {
  loteka: Loteka;
  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getLoteka().subscribe(l => {
      this.loteka = l.data;
    });
  }


}
