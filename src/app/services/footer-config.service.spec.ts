import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FooterConfigService } from './footer-config.service';
import { FooterButton } from '../models/footer-button';

describe('FooterConfigService', () => {
  let service: FooterConfigService;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        FooterConfigService,
        { provide: Router, useValue: mockRouter },
      ],
    });

    service = TestBed.inject(FooterConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct buttons for "/" route', () => {
    const buttons = service.getButtonsForPage('/');
    expect(buttons.length).toBe(1);
    expect(buttons[0].label).toContain('Dicas');
  });

  it('should return correct buttons for "/cooperado" route', () => {
    const buttons = service.getButtonsForPage('/cooperado');
    expect(buttons.length).toBe(2);
    expect(buttons.some(b => b.label.includes('Iniciar'))).toBeTrue();
  });

  it('should navigate on "Iniciar nova admissão" action', () => {
    service.iniciarAdmissaoButton.action();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should return empty array for unknown route', () => {
    const buttons = service.getButtonsForPage('/nao-existe');
    expect(buttons).toEqual([]);
  });
});
