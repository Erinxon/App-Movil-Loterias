import { Americanas } from "./americanas.model";
import { Anguila } from "./anguila.model";
import { KingLottery } from "./kingLottery.model";
import { LaSuerte } from "./laSuerte.model";
import { Leidsa } from "./leidsa.model";
import { LoteDom } from "./loteDom.model";
import { Loteka } from "./loteka.model";
import { Nacional } from "./nacional.model";
import { Primera } from "./primera.model";
import { Real } from "./real.model";

export interface Loteria{
    nacional: Nacional;
    leidsa: Leidsa;
    real: Real;
    loteDom: LoteDom;
    loteka: Loteka;
    anguila: Anguila;
    kingLottery: KingLottery;
    americanas: Americanas;
    laSuerte: LaSuerte;
    laPrimera: Primera;
}