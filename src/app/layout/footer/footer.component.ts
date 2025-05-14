import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterButton } from '../../models/footer-button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input({ required: true }) buttons: FooterButton[] = [];
}
