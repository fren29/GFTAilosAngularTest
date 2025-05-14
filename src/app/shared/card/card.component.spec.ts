import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Card } from '../../models/card.model';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockCard: Card = {
    title: {
      label: 'Subtítulo',
      value: 'Título principal'
    },
    infos: [
      { icon: 'check_circle', label: 'Situação do CPF', value: 'Regular' },
      { icon: 'person', label: 'Nome', value: 'Mariane' }
    ],
    actions: [
      { label: 'Duplicar', url: '/copiar' }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = mockCard;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card title and subtitle', () => {
    const title = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const subtitle = fixture.debugElement.query(By.css('.card-subtitle')).nativeElement;

    expect(title.textContent).toContain(mockCard.title.value);
    expect(subtitle.textContent).toContain(mockCard.title.label);
  });

  it('should render all infos', () => {
    const infos = fixture.debugElement.queryAll(By.css('.info'));
    expect(infos.length).toBe(mockCard.infos?.length ?? 0);
  });

  it('should apply the green icon class when icon is check_circle', () => {
    const icons = fixture.debugElement.queryAll(By.css('mat-icon'));
    const greenIcon = icons.find(el => el.nativeElement.textContent.trim() === 'check_circle');
    expect(greenIcon?.nativeElement.classList).toContain('success-icon');
  });

  it('should render all action buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.card-action-button'));
    expect(buttons.length).toBe(mockCard.actions?.length ?? 0);
  });
});
