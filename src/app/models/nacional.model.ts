import { Sorteo } from "./sorteo.model";
import { SorteoEspecial } from "./sorteoEspecial.model";

export interface Nacional{
    sorteos: Sorteo[];
    SorteoEspeciales: SorteoEspecial[];
}