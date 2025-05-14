import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Cooperado } from '../models/cooperado.model';

@Injectable({
  providedIn: 'root',
})
export class CooperadoService {
  /**
   * Retorna os dados simulados de um cooperado.
   * @param cpf CPF do cooperado
   * @returns Observable<Cooperado>
   */
  public getCooperado(cpf: string): Observable<Cooperado> {
    const mockCooperado: Cooperado = {
      nome: 'Mariane de Sousa Oliveira',
      cpf,
      contaAplicacao: '557932-4',
      contaCorrente: '778641-8',
      situacao: 'Regular',
    };

    return of(mockCooperado).pipe(delay(500));
  }
}
