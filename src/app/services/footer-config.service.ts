import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FooterButton } from '../models/footer-button';

@Injectable({ providedIn: 'root' })
export class FooterConfigService {
  constructor(private readonly router: Router) {}

  // Métodos de ação
  private navigateToHome(): void {
    this.router.navigate(['/']);
  }

  private showDicasAdmissao(): void {
    // Substituir por modal, navegação, etc.
    console.log('Dicas para admissão');
  }

  private handleFicticio(): void {
    console.log('Método fictício');
  }

  // Fábrica de botões
  private createButton(label: string, type: 'primary' | 'secondary', action: () => void): FooterButton {
    return { label, type, action };
  }

  // Botões centralizados
  public readonly iniciarAdmissaoButton = this.createButton(
    'Iniciar nova admissão',
    'primary',
    () => this.navigateToHome()
  );

  public readonly dicasAdmissaoButton = this.createButton(
    'Dicas para admissão',
    'secondary',
    () => this.showDicasAdmissao()
  );

  public readonly templateFuturoButton = this.createButton(
    'Template futuro',
    'secondary',
    () => this.handleFicticio()
  );

  /**
   * Retorna os botões do rodapé com base na rota atual.
   * @param route Rota atual
   * @returns Array de botões do rodapé
   */
  getButtonsForPage(route: string): FooterButton[] {
    const map: Record<string, FooterButton[]> = {
      '/': [this.dicasAdmissaoButton],
      '/cooperado': [this.iniciarAdmissaoButton, this.dicasAdmissaoButton],
      '/futura-pagina': [this.templateFuturoButton],
    };

    return map[route] ?? [];
  }
}
