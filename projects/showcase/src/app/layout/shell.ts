import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UiButton } from 'ui';
import { ThemeService } from '../core/theme.service';

interface NavItem {
  label: string;
  route: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

@Component({
  selector: 'docs-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UiButton],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  readonly theme = inject(ThemeService);
  readonly menuOpen = signal(false);

  readonly nav: NavGroup[] = [
    {
      title: 'Introdução',
      items: [
        { label: 'Visão geral', route: '/' },
        { label: 'Fundamentos', route: '/fundamentos' },
      ],
    },
    {
      title: 'Componentes',
      items: [
        { label: 'Ações', route: '/acoes' },
        { label: 'Exibição', route: '/exibicao' },
        { label: 'Formulários', route: '/formularios' },
        { label: 'Feedback', route: '/feedback' },
      ],
    },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
