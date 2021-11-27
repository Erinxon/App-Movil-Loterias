import { Component, OnInit } from '@angular/core';
import { Americanas } from 'src/app/models/americanas.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-americanas',
  templateUrl: './americanas.page.html',
  styleUrls: ['./americanas.page.scss'],
})
export class AmericanasPage implements OnInit {
  americanas: Americanas;

  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getAmericanas().subscribe(a => {
      this.americanas = a.data;
    });
  }

}
