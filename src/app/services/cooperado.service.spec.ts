import { TestBed } from '@angular/core/testing';
import { CooperadoService } from './cooperado.service';
import { take } from 'rxjs/operators';

describe('CooperadoService', () => {
  let service: CooperadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a cooperado observable with correct data', (done) => {
    const testCpf = '12345678900';

    service.getCooperado(testCpf).pipe(take(1)).subscribe((cooperado) => {
      expect(cooperado).toBeTruthy();
      expect(cooperado.cpf).toBe(testCpf);
      expect(cooperado.nome).toBe('Mariane de Sousa Oliveira');
      expect(cooperado.contaAplicacao).toBeTruthy();
      done();
    });
  });
});
