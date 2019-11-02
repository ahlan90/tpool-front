import { Serie } from './serie';
import { Aluno } from './aluno';
import { Professor } from './professor';

export interface Ficha{
    aluno: Aluno
    professor: Professor
    series: Serie[]
}