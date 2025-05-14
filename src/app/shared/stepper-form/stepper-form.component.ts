import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss'],
  imports: [CommonModule, MatStepperModule]
})
export class StepperFormComponent {
  currentIndex = 0;

  setStep(index: number) {
    this.currentIndex = index;
  }
}
