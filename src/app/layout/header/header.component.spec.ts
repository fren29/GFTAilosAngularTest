import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain('Nova Admissão Cooperado');
  });

  it('should render avatar image', () => {
    const avatar = fixture.debugElement.query(By.css('.avatar')).nativeElement;
    expect(avatar).toBeTruthy();
    expect(avatar.getAttribute('src')).toContain('https://i.pravatar.cc/');
  });

  it('should render notifications icon with badge', () => {
    const icon = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    expect(icon.textContent).toContain('notifications');
  });

  it('should render cooperative button', () => {
    const button = fixture.debugElement.query(By.css('.cooperative')).nativeElement;
    expect(button.textContent).toContain('VIACREDI');
  });
});
