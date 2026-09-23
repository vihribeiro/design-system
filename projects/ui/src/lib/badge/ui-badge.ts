import { Component, input } from '@angular/core';

export type UiBadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type UiBadgeVariant = 'soft' | 'solid' | 'outline';

@Component({
  selector: 'ui-badge',
  template: `<span class="badge" [class]="'badge--' + tone() + ' badge--' + variant()"><ng-content /></span>`,
  styles: `
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.2rem 0.6rem;
      border-radius: var(--ui-radius-full, 999px);
      font-family: var(--ui-font, inherit);
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1.4;
      border: 1px solid transparent;
    }

    .badge--neutral {
      --tone: var(--ui-color-neutral, #475467);
      --tone-soft: var(--ui-color-neutral-soft, #f0f3f9);
    }

    .badge--primary {
      --tone: var(--ui-color-primary, #0a8f5b);
      --tone-soft: var(--ui-color-primary-soft, #e4f5ee);
    }

    .badge--success {
      --tone: var(--ui-color-success, #0a8f5b);
      --tone-soft: var(--ui-color-success-soft, #e4f5ee);
    }

    .badge--warning {
      --tone: var(--ui-color-warning, #b54708);
      --tone-soft: var(--ui-color-warning-soft, #fdf1e3);
    }

    .badge--danger {
      --tone: var(--ui-color-danger, #d92d20);
      --tone-soft: var(--ui-color-danger-soft, #fdeceb);
    }

    .badge--info {
      --tone: var(--ui-color-info, #175cd3);
      --tone-soft: var(--ui-color-info-soft, #e8f0fe);
    }

    .badge--soft {
      background: var(--tone-soft);
      color: var(--tone);
    }

    .badge--solid {
      background: var(--tone);
      color: #fff;
    }

    .badge--outline {
      border-color: var(--tone);
      color: var(--tone);
    }
  `,
})
export class UiBadge {
  readonly tone = input<UiBadgeTone>('neutral');
  readonly variant = input<UiBadgeVariant>('soft');
}
