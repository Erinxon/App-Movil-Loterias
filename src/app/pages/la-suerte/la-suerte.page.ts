import { Component, OnInit } from '@angular/core';
import { LaSuerte } from 'src/app/models/laSuerte.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-la-suerte',
  templateUrl: './la-suerte.page.html',
  styleUrls: ['./la-suerte.page.scss'],
})
export class LaSuertePage implements OnInit {
  laSuerte: LaSuerte;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getLaSuerte().subscribe(a => {
      this.laSuerte = a.data;
    });
  }


}
