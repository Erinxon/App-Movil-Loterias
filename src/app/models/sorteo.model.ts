import { SorteoBase } from "./sorteoBase.model";

export interface Sorteo extends SorteoBase {
    numeros: string[];
}