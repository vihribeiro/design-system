import { Component, inject } from '@angular/core';
import { UiToastService } from './ui-toast.service';

@Component({
  selector: 'ui-toast-container',
  template: `
    <div class="toasts" aria-live="polite" aria-atomic="false">
      @for (toast of toasts(); track toast.id) {
        <div class="toast" [class]="'toast--' + toast.tone" role="status">
          <span class="toast__icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              @switch (toast.tone) {
                @case ('success') {
                  <path d="M20 6 9 17l-5-5" />
                }
                @case ('warning') {
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <path d="M12 9v4M12 17h.01" />
                }
                @case ('danger') {
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                }
                @default {
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                }
              }
            </svg>
          </span>

          <div class="toast__content">
            @if (toast.title) {
              <strong class="toast__title">{{ toast.title }}</strong>
            }
            <span class="toast__message">{{ toast.message }}</span>
          </div>

          <button type="button" class="toast__close" aria-label="Fechar" (click)="dismiss(toast.id)">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      }
    </div>
  `,
  styles: `
    .toasts {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 70;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      width: min(360px, calc(100vw - 2rem));
    }

    .toast {
      display: flex;
      align-items: flex-start;
      gap: 0.7rem;
      padding: 0.85rem 0.9rem;
      border-radius: var(--ui-radius, 10px);
      border: 1px solid var(--ui-border, #e3e8f0);
      border-left: 4px solid var(--tone, var(--ui-color-info, #175cd3));
      background: var(--ui-surface, #fff);
      color: var(--ui-text, #1b2430);
      box-shadow: var(--ui-shadow-lg, 0 12px 32px rgba(16, 24, 40, 0.16));
      font-family: var(--ui-font, inherit);
      animation: ui-slide 0.2s ease;
    }

    .toast--info {
      --tone: var(--ui-color-info, #175cd3);
    }
    .toast--success {
      --tone: var(--ui-color-success, #0a8f5b);
    }
    .toast--warning {
      --tone: var(--ui-color-warning, #b54708);
    }
    .toast--danger {
      --tone: var(--ui-color-danger, #d92d20);
    }

    .toast__icon {
      color: var(--tone);
      display: inline-flex;
      margin-top: 0.1rem;
    }

    .toast__content {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }

    .toast__title {
      font-size: 0.9rem;
    }

    .toast__message {
      font-size: 0.85rem;
      color: var(--ui-text-muted, #667085);
    }

    .toast__close {
      border: none;
      background: transparent;
      color: var(--ui-text-muted, #667085);
      cursor: pointer;
      display: inline-flex;
      padding: 0;
    }

    @keyframes ui-slide {
      from {
        opacity: 0;
        transform: translateX(16px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .toast {
        animation: none;
      }
    }
  `,
})
export class UiToastContainer {
  private readonly service = inject(UiToastService);

  readonly toasts = this.service.toasts;

  dismiss(id: number): void {
    this.service.dismiss(id);
  }
}
