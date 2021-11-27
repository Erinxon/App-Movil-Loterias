import { Component, OnInit } from '@angular/core';
import { KingLottery } from 'src/app/models/kingLottery.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-king-lotery',
  templateUrl: './king-lotery.page.html',
  styleUrls: ['./king-lotery.page.scss'],
})
export class KingLoteryPage implements OnInit {
  kingLottery: KingLottery;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getKingLottery().subscribe(a => {
      this.kingLottery = a.data;
    });
  }

}
