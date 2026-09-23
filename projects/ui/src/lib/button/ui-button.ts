import { Component, input } from '@angular/core';
import { UiSpinner } from '../spinner/ui-spinner';

export type UiButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type UiButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  imports: [UiSpinner],
  host: {
    '[class.is-block]': 'fullWidth()',
  },
  template: `
    <button
      class="btn"
      [class]="'btn--' + variant() + ' btn--' + size()"
      [class.btn--block]="fullWidth()"
      [attr.type]="type()"
      [disabled]="disabled() || loading()"
      [attr.aria-busy]="loading()"
    >
      @if (loading()) {
        <ui-spinner [size]="16" />
      }
      <span class="btn__label"><ng-content /></span>
    </button>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    :host(.is-block) {
      display: flex;
      width: 100%;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      border: 1px solid transparent;
      border-radius: var(--ui-radius, 10px);
      font-family: var(--ui-font, inherit);
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition:
        background var(--ui-transition, 0.15s ease),
        border-color var(--ui-transition, 0.15s ease),
        color var(--ui-transition, 0.15s ease),
        opacity var(--ui-transition, 0.15s ease);
    }

    .btn:focus-visible {
      outline: 2px solid var(--ui-color-primary, #0a8f5b);
      outline-offset: 2px;
    }

    .btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .btn--sm {
      padding: 0.4rem 0.75rem;
      font-size: 0.82rem;
    }

    .btn--md {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }

    .btn--lg {
      padding: 0.8rem 1.35rem;
      font-size: 1rem;
    }

    .btn--block {
      display: flex;
    }

    .btn--primary {
      background: var(--ui-color-primary, #0a8f5b);
      color: var(--ui-color-primary-contrast, #fff);
    }

    .btn--primary:hover:not(:disabled) {
      background: var(--ui-color-primary-hover, #076b44);
    }

    .btn--secondary {
      background: var(--ui-surface-2, #f0f3f9);
      color: var(--ui-text, #1b2430);
      border-color: var(--ui-border, #e3e8f0);
    }

    .btn--secondary:hover:not(:disabled) {
      border-color: var(--ui-text-muted, #667085);
    }

    .btn--ghost {
      background: transparent;
      color: var(--ui-text, #1b2430);
    }

    .btn--ghost:hover:not(:disabled) {
      background: var(--ui-surface-2, #f0f3f9);
    }

    .btn--danger {
      background: var(--ui-color-danger-soft, #fdeceb);
      color: var(--ui-color-danger, #d92d20);
    }

    .btn--danger:hover:not(:disabled) {
      background: var(--ui-color-danger, #d92d20);
      color: #fff;
    }
  `,
})
export class UiButton {
  readonly variant = input<UiButtonVariant>('primary');
  readonly size = input<UiButtonSize>('md');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly loading = input(false);
  readonly disabled = input(false);
  readonly fullWidth = input(false);
}
