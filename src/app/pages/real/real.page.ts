import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Real } from 'src/app/models/real.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-real',
  templateUrl: './real.page.html',
  styleUrls: ['./real.page.scss'],
})
export class RealPage implements OnInit {
  real: Real;
  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getReal().subscribe(r => {
      this.real = r.data;
    })
  }


}
