import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { CooperadoService } from '../../services/cooperado.service';
import { CooperadoCardService } from '../../services/cooperado-card.service';
import { Card } from '../../models/card.model';

import { CpfCheckComponent } from '../cpf-check/cpf-check.component';
import { CardListComponent } from '../../shared/card-list/card-list.component';

@Component({
  selector: 'app-cooperado',
  standalone: true,
  imports: [CommonModule, RouterModule, CpfCheckComponent, CardListComponent],
  templateUrl: './cooperado.component.html',
  styleUrls: ['./cooperado.component.scss'],
})
export class CooperadoComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cooperadoService = inject(CooperadoService);
  private readonly cardService = inject(CooperadoCardService);

  public cards$!: Observable<Card[]>;

  ngOnInit(): void {
    this.cards$ = this.cardService.cards$;

    const cpf = this.route.snapshot.paramMap.get('cpf');
    if (cpf) {
      this.cooperadoService.getCooperado(cpf).subscribe({
        next: (data) => this.cardService.setCooperado(data),
        error: (err) => console.error('Erro ao buscar cooperado:', err),
      });
    }
  }
}
