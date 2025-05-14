import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { StepperFormComponent } from '../../shared/stepper-form/stepper-form.component';
import { FooterButton } from '../../models/footer-button';

@Component({
  selector: 'app-cpf-check',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskDirective,
    StepperFormComponent
  ],
  providers: [provideNgxMask()],
  templateUrl: './cpf-check.component.html',
  styleUrls: ['./cpf-check.component.scss']
})
export class CpfCheckComponent {
  public readonly form: FormGroup;
  public errorMessage = '';

  public readonly footerButtons: FooterButton[] = [
    {
      label: 'Dicas para admissão',
      type: 'secondary',
      action: () => this.onTipsClick()
    }
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    const cpf = this.form.value.cpf;
    if (!this.isValidCPF(cpf)) {
      this.errorMessage = 'CPF inválido. Verifique e tente novamente.';
      return;
    }

    this.router.navigate(['/cooperado', cpf.replace(/[^\d]+/g, '')]);
  }

  private onTipsClick(): void {
    // Em produção, pode ser modal ou rota dedicada
    alert('Abrir dicas para admissão');
  }

  private isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += +cpf.charAt(i) * (10 - i);
    let rest = 11 - (sum % 11);
    if (rest >= 10) rest = 0;
    if (rest !== +cpf.charAt(9)) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += +cpf.charAt(i) * (11 - i);
    rest = 11 - (sum % 11);
    if (rest >= 10) rest = 0;

    return rest === +cpf.charAt(10);
  }
}
