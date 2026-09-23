import { TestBed } from '@angular/core/testing';
import { UiBadge } from './ui-badge';

describe('UiBadge', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [UiBadge] }).compileComponents();
  });

  it('deve aplicar a classe do tom informado', () => {
    const fixture = TestBed.createComponent(UiBadge);
    fixture.componentRef.setInput('tone', 'success');
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('.badge') as HTMLElement;
    expect(badge.classList).toContain('badge--success');
    expect(badge.classList).toContain('badge--soft');
  });

  it('deve suportar a variante solid', () => {
    const fixture = TestBed.createComponent(UiBadge);
    fixture.componentRef.setInput('variant', 'solid');
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('.badge') as HTMLElement;
    expect(badge.classList).toContain('badge--solid');
  });
});
