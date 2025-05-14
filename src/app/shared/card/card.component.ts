import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({ required: true }) data!: Card;
}
