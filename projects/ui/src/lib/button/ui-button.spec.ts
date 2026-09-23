import { TestBed } from '@angular/core/testing';
import { UiButton } from './ui-button';

describe('UiButton', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [UiButton] }).compileComponents();
  });

  it('deve renderizar um elemento button', () => {
    const fixture = TestBed.createComponent(UiButton);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button).toBeTruthy();
  });

  it('deve aplicar a classe da variante informada', () => {
    const fixture = TestBed.createComponent(UiButton);
    fixture.componentRef.setInput('variant', 'danger');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList).toContain('btn--danger');
  });

  it('deve desabilitar o botão durante o loading', () => {
    const fixture = TestBed.createComponent(UiButton);
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');
  });
});
