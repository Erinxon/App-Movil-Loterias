import { Component, OnInit } from '@angular/core';
import { Primera } from 'src/app/models/primera.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.page.html',
  styleUrls: ['./primera.page.scss'],
})
export class PrimeraPage implements OnInit {
  laPrimera: Primera;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getLaPrimera().subscribe(a => {
      this.laPrimera = a.data;
    });
  }


}
