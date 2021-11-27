import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //{ title: 'Loterias', url: '/loterias'},
    { title: 'Nacional', url: '/nacional'},
    { title: 'Loteka', url: '/loteka'},
    { title: 'Real', url: '/real'},
    { title: 'Leidsa', url: '/leidsa'},
    { title: 'Lote Dom', url: '/lote-dom' },
    { title: 'Americanas', url: '/americanas'},
    { title: 'Anguila', url: '/anguila'},
    { title: 'La suerte', url: '/la-suerte'},
    { title: 'La primera', url: '/primera'},
    { title: 'King Lottery  ', url: '/king-lotery'},
  ];
  constructor() {}
}
