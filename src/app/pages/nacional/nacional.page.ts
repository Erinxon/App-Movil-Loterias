import { Component, OnInit } from '@angular/core';
import { Nacional } from 'src/app/models/nacional.model';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.page.html',
  styleUrls: ['./nacional.page.scss'],
})
export class NacionalPage implements OnInit {
  nacional: Nacional;
  constructor(private loteriaService: LoteriaService) { }

  ngOnInit() {
    this.loteriaService.getNacional().subscribe(res => {
      this.nacional = res.data;
    })
  }
  
}
