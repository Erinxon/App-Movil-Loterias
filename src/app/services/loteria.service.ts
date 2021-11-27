import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Americanas } from '../models/americanas.model';
import { ApiResponse } from '../models/apiResponse.model';
import { KingLottery } from '../models/kingLottery.model';
import { LaSuerte } from '../models/laSuerte.model';
import { Leidsa } from '../models/leidsa.model';
import { LoteDom } from '../models/loteDom.model';
import { Loteka } from '../models/loteka.model';
import { Loteria } from '../models/loteria.model';
import { Nacional } from '../models/nacional.model';
import { Primera } from '../models/primera.model';
import { Real } from '../models/real.model';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  constructor(private http: HttpClient) { 

  }

  getLoterias(): Observable<ApiResponse<Loteria>>{
    return this.http.get<ApiResponse<Loteria>>('/loterias');
  }

  getNacional(): Observable<ApiResponse<Nacional>> {
    return this.http.get<ApiResponse<Nacional>>('/Loterias/nacional');
  }

  getReal(): Observable<ApiResponse<Real>> {
    return this.http.get<ApiResponse<Real>>('/Loterias/real');
  }

  getLeidsa(): Observable<ApiResponse<Leidsa>> {
    return this.http.get<ApiResponse<Leidsa>>('/Loterias/leidsa');
  }

  getLoteka(): Observable<ApiResponse<Loteka>> {
    return this.http.get<ApiResponse<Loteka>>('/Loterias/loteka');
  }

  getLoteDom(): Observable<ApiResponse<LoteDom>> {
    return this.http.get<ApiResponse<LoteDom>>('/Loterias/loteDom');
  }

  getAmericanas(): Observable<ApiResponse<Americanas>> {
    return this.http.get<ApiResponse<Americanas>>('/Loterias/americanas');
  }

  getLaSuerte(): Observable<ApiResponse<LaSuerte>> {
    return this.http.get<ApiResponse<LaSuerte>>('/Loterias/laSuerte');
  }

  getLaPrimera(): Observable<ApiResponse<Primera>> {
    return this.http.get<ApiResponse<Primera>>('/Loterias/primera');
  }

  getKingLottery(): Observable<ApiResponse<KingLottery>> {
    return this.http.get<ApiResponse<KingLottery>>('/Loterias/kingLottery');
  }

}
