import { Component, input, output, signal } from '@angular/core';

export type UiAlertTone = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ui-alert',
  template: `
    @if (open()) {
      <div class="alert" [class]="'alert--' + tone()" role="alert">
        <span class="alert__icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            @switch (tone()) {
              @case ('success') {
                <path d="M20 6 9 17l-5-5" />
              }
              @case ('warning') {
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              }
              @case ('danger') {
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6" />
                <path d="M9 9l6 6" />
              }
              @default {
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              }
            }
          </svg>
        </span>

        <div class="alert__content">
          @if (title()) {
            <strong class="alert__title">{{ title() }}</strong>
          }
          <div class="alert__text"><ng-content /></div>
        </div>

        @if (dismissible()) {
          <button type="button" class="alert__close" aria-label="Fechar" (click)="dismiss()">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        }
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }

    .alert {
      display: flex;
      gap: 0.75rem;
      padding: 0.9rem 1rem;
      border-radius: var(--ui-radius, 10px);
      border: 1px solid transparent;
      font-family: var(--ui-font, inherit);
      font-size: 0.9rem;
    }

    .alert__icon {
      flex-shrink: 0;
      display: inline-flex;
      margin-top: 0.1rem;
    }

    .alert__content {
      flex: 1;
      min-width: 0;
    }

    .alert__title {
      display: block;
      margin-bottom: 0.15rem;
    }

    .alert__text {
      color: inherit;
      opacity: 0.9;
    }

    .alert__close {
      border: none;
      background: transparent;
      color: inherit;
      cursor: pointer;
      opacity: 0.7;
      display: inline-flex;
      padding: 0;
      height: fit-content;
    }

    .alert__close:hover {
      opacity: 1;
    }

    .alert--info {
      background: var(--ui-color-info-soft, #e8f0fe);
      color: var(--ui-color-info, #175cd3);
    }

    .alert--success {
      background: var(--ui-color-success-soft, #e4f5ee);
      color: var(--ui-color-success, #0a8f5b);
    }

    .alert--warning {
      background: var(--ui-color-warning-soft, #fdf1e3);
      color: var(--ui-color-warning, #b54708);
    }

    .alert--danger {
      background: var(--ui-color-danger-soft, #fdeceb);
      color: var(--ui-color-danger, #d92d20);
    }
  `,
})
export class UiAlert {
  readonly tone = input<UiAlertTone>('info');
  readonly title = input('');
  readonly dismissible = input(false);
  readonly closed = output<void>();

  private readonly visible = signal(true);

  open(): boolean {
    return this.visible();
  }

  dismiss(): void {
    this.visible.set(false);
    this.closed.emit();
  }
}
