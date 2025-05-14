import { Routes } from '@angular/router';
import { CpfCheckComponent } from './pages/cpf-check/cpf-check.component';
import { CooperadoComponent } from './pages/cooperado/cooperado.component';

export const routes: Routes = [
  { path: '', component: CpfCheckComponent },
  { path: 'cooperado/:cpf', component: CooperadoComponent }
];
