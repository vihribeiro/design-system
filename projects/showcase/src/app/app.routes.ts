import { Routes } from '@angular/router';
import { Shell } from './layout/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/overview').then((m) => m.Overview),
      },
      {
        path: 'fundamentos',
        loadComponent: () => import('./pages/foundations').then((m) => m.Foundations),
      },
      {
        path: 'acoes',
        loadComponent: () => import('./pages/actions').then((m) => m.Actions),
      },
      {
        path: 'exibicao',
        loadComponent: () => import('./pages/display').then((m) => m.Display),
      },
      {
        path: 'formularios',
        loadComponent: () => import('./pages/forms').then((m) => m.Forms),
      },
      {
        path: 'feedback',
        loadComponent: () => import('./pages/feedback').then((m) => m.Feedback),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
