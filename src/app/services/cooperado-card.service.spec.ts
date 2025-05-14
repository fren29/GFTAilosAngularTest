import { TestBed } from '@angular/core/testing';
import { CooperadoCardService } from './cooperado-card.service';
import { Cooperado } from '../models/cooperado.model';
import { Card } from '../models/card.model';

describe('CooperadoCardService', () => {
  let service: CooperadoCardService;

  const mockCooperado: Cooperado = {
    nome: 'Maria Teste',
    cpf: '123.456.789-00',
    situacao: 'Regular',
    contaAplicacao: '0001234',
    contaCorrente: '9876543',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperadoCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate initial cards based on cooperado', (done) => {
    service.setCooperado(mockCooperado);

    service.cards$.subscribe((cards: Card[]) => {
      expect(cards.length).toBe(3);
      expect(cards[0].infos?.[0].label).toBe('Nome');
      expect(cards[1].title.value).toBe('Conta aplicação');
      expect(cards[2].infos?.[0].value).toBe('9876543');
      done();
    });
  });

  it('should duplicate a new card with the right data', (done) => {
    service.setCooperado(mockCooperado);
    service.duplicarConta('Conta corrente', '111222333');

    service.cards$.subscribe((cards: Card[]) => {
      const duplicated = cards.find(c => c.title.label.startsWith('ID:'));
      expect(duplicated).toBeTruthy();
      expect(duplicated?.infos?.[0].value).toBe('111222333');
      done();
    });
  });
});
