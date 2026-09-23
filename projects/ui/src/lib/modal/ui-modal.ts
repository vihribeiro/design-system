import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ui-modal',
  template: `
    @if (open()) {
      <div class="backdrop" (click)="onBackdropClick()">
        <div
          class="modal"
          [class.modal--lg]="size() === 'lg'"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="title()"
          (click)="$event.stopPropagation()"
        >
          <header class="modal__header">
            <h3 class="modal__title">{{ title() }}</h3>
            @if (closable()) {
              <button type="button" class="modal__close" aria-label="Fechar" (click)="closed.emit()">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            }
          </header>

          <div class="modal__body">
            <ng-content />
          </div>

          <footer class="modal__footer">
            <ng-content select="[uiModalFooter]" />
          </footer>
        </div>
      </div>
    }
  `,
  styles: `
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: grid;
      place-items: center;
      padding: 1rem;
      background: var(--ui-overlay, rgba(16, 24, 40, 0.55));
      animation: ui-fade 0.15s ease;
    }

    .modal {
      width: 100%;
      max-width: 460px;
      max-height: 90vh;
      overflow: auto;
      background: var(--ui-surface, #fff);
      color: var(--ui-text, #1b2430);
      border-radius: var(--ui-radius-lg, 16px);
      box-shadow: var(--ui-shadow-lg, 0 12px 32px rgba(16, 24, 40, 0.16));
      font-family: var(--ui-font, inherit);
      animation: ui-pop 0.18s ease;
    }

    .modal--lg {
      max-width: 640px;
    }

    .modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid var(--ui-border, #e3e8f0);
    }

    .modal__title {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 700;
    }

    .modal__close {
      display: inline-grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--ui-radius-sm, 6px);
      background: transparent;
      color: var(--ui-text-muted, #667085);
      cursor: pointer;
    }

    .modal__close:hover {
      background: var(--ui-surface-2, #f0f3f9);
      color: var(--ui-text, #1b2430);
    }

    .modal__body {
      padding: 1.25rem;
    }

    .modal__footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.6rem;
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--ui-border, #e3e8f0);
    }

    .modal__footer:empty {
      display: none;
    }

    @keyframes ui-fade {
      from {
        opacity: 0;
      }
    }

    @keyframes ui-pop {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .modal {
        animation: none;
      }
    }
  `,
})
export class UiModal {
  readonly title = input('');
  readonly open = input(false);
  readonly size = input<'md' | 'lg'>('md');
  readonly closable = input(true);
  readonly closed = output<void>();

  protected onBackdropClick(): void {
    if (this.closable()) {
      this.closed.emit();
    }
  }
}
