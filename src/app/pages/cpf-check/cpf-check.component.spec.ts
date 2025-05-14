import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpfCheckComponent } from './cpf-check.component';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('CpfCheckComponent', () => {
  let component: CpfCheckComponent;
  let fixture: ComponentFixture<CpfCheckComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CpfCheckComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CpfCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should show error for invalid CPF', () => {
    component.form.setValue({ cpf: '111.111.111-11' });
    component.onSubmit();
    expect(component.errorMessage).toContain('CPF inválido');
  });

  it('should navigate on valid CPF', () => {
    component.form.setValue({ cpf: '529.982.247-25' }); 
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/cooperado', '52998224725']);
  });
});
