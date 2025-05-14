import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

import { CooperadoComponent } from './cooperado.component';
import { CooperadoService } from '../../services/cooperado.service';
import { CooperadoCardService } from '../../services/cooperado-card.service';
import { Card } from '../../models/card.model';

describe('CooperadoComponent', () => {
  let component: CooperadoComponent;
  let fixture: ComponentFixture<CooperadoComponent>;

  const mockCardService = {
    cards$: of([{ title: { label: 'Nome', value: 'João' } }] as Card[]),
    setCooperado: jasmine.createSpy('setCooperado'),
  };

  const mockCooperadoService = {
    getCooperado: jasmine.createSpy('getCooperado').and.returnValue(of({ nome: 'João' })),
  };

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => '12345678900',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperadoComponent],
      providers: [
        { provide: CooperadoCardService, useValue: mockCardService },
        { provide: CooperadoService, useValue: mockCooperadoService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCooperado with cpf from route', () => {
    expect(mockCooperadoService.getCooperado).toHaveBeenCalledWith('12345678900');
    expect(mockCardService.setCooperado).toHaveBeenCalled();
  });

  it('should subscribe to cards$', (done) => {
    component.cards$.subscribe((cards) => {
      expect(cards.length).toBeGreaterThan(0);
      done();
    });
  });
});
