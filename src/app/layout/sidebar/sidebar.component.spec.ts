import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  const expectedIcons = ['forest', 'menu', 'search', 'star', 'chat', 'tune', 'account_balance'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of mat-icons (logo + menu)', () => {
    const icons = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(icons.length).toBe(expectedIcons.length);
  });

  it('should render icons in the correct order', () => {
    const icons = fixture.debugElement.queryAll(By.css('mat-icon'));

    expectedIcons.forEach((expected, i) => {
      const actual = icons[i].nativeElement.textContent.trim();
      expect(actual).withContext(`Index ${i}`).toBe(expected);
    });
  });
});
