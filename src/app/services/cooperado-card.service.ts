import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardInfo, CardAction } from '../models/card.model';
import { Cooperado } from '../models/cooperado.model';

@Injectable({
  providedIn: 'root',
})
export class CooperadoCardService {
  private readonly cardsSubject = new BehaviorSubject<Card[]>([]);
  public readonly cards$ = this.cardsSubject.asObservable();

  private cooperado!: Cooperado;

  setCooperado(cooperado: Cooperado): void {
    this.cooperado = cooperado;

    const cards: Card[] = [
      this.createReceitaFederalCard(cooperado),
      this.createContaAplicacaoCard(cooperado),
      this.createContaCorrenteCard(cooperado),
    ];

    this.cardsSubject.next(cards);
  }

  private createReceitaFederalCard(cooperado: Cooperado): Card {
    return {
      title: {
        label: 'Consulta na Receita Federal',
        value: 'Situação cadastral do CPF',
      },
      infos: [
        this.info('person', 'Nome', cooperado.nome),
        this.info('check_circle', 'Situação do CPF', cooperado.situacao),
      ],
    };
  }

  private createContaAplicacaoCard(cooperado: Cooperado): Card {
    return {
      title: {
        label: 'Cooperativa Viacredi',
        value: 'Conta aplicação',
      },
      infos: [
        this.info('account_balance', 'Número da conta', cooperado.contaAplicacao),
      ],
      actions: [
        this.action('Duplicar conta', () =>
          this.duplicarConta('Conta aplicação', cooperado.contaAplicacao)
        ),
      ],
    };
  }

  private createContaCorrenteCard(cooperado: Cooperado): Card {
    return {
      title: {
        label: 'Cooperativa Viacredi',
        value: 'Conta corrente',
      },
      infos: [
        this.info('credit_card', 'Número da conta', cooperado.contaCorrente),
      ],
      actions: [
        this.action('Duplicar conta', () =>
          this.duplicarConta('Conta corrente', cooperado.contaCorrente)
        ),
      ],
    };
  }

  private info(icon: string, label: string, value: string): CardInfo {
    return { icon, label, value };
  }

  private action(label: string, fn: () => void): CardAction {
    return { label, action: fn};
  }

  duplicarConta(tipo: string, numero: string): void {
    const duplicatedCard: Card = {
      title: {
        label: `ID: ${crypto.randomUUID()}`,
        value: tipo,
      },
      infos: [this.info('copy_all', 'Número da conta duplicada', numero)],
      actions: [this.action('Duplicar novamente', () => this.duplicarConta(tipo, numero))],
    };

    const updatedCards = [...this.cardsSubject.value, duplicatedCard];
    this.cardsSubject.next(updatedCards);
  }
}
