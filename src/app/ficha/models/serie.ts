import { Exercicio } from './exercicio';

export interface Serie {
    id: number
    nome: string
    exercicios?: Exercicio[]
}