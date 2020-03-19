import { Exercicio } from './exercicio';

export class Serie {
    serieId: string;
    nome: string;
    exercicios?: Exercicio[];
    ordem: number;
}