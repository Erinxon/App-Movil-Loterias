import { SorteoBase } from "./sorteoBase.model";
import { SorteoEspecialResultado } from "./sorteoEspecialResultado.model";

export interface SorteoEspecial extends SorteoBase{
    Numeros: SorteoEspecialResultado[];
}
