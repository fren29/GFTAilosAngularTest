import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { FooterButton } from '../../models/footer-button';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const mockButtons:FooterButton[] = [
    {
      label: 'Salvar',
      type: 'primary',
      action: jasmine.createSpy('salvar')
    },
    {
      label: 'Cancelar',
      type: 'secondary',
      action: jasmine.createSpy('cancelar')
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.buttons = mockButtons;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(mockButtons.length);
  });

  it('should display correct labels', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons.forEach((btn, index) => {
      expect(btn.nativeElement.textContent.trim()).toBe(mockButtons[index].label);
    });
  });

  it('should call the correct action on click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons.forEach((btn, index) => {
      btn.nativeElement.click();
      expect(mockButtons[index].action).toHaveBeenCalled();
    });
  });
});
