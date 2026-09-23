import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-card',
  template: `
    <article class="card">
      @if (heading() || subheading()) {
        <header class="card__header">
          <div class="card__titles">
            @if (heading()) {
              <h3 class="card__heading">{{ heading() }}</h3>
            }
            @if (subheading()) {
              <p class="card__subheading">{{ subheading() }}</p>
            }
          </div>
          <div class="card__actions">
            <ng-content select="[uiCardActions]" />
          </div>
        </header>
      }

      <div class="card__body">
        <ng-content />
      </div>

      <footer class="card__footer">
        <ng-content select="[uiCardFooter]" />
      </footer>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      background: var(--ui-surface, #fff);
      border: 1px solid var(--ui-border, #e3e8f0);
      border-radius: var(--ui-radius-lg, 16px);
      box-shadow: var(--ui-shadow, 0 1px 3px rgba(16, 24, 40, 0.1));
      overflow: hidden;
      font-family: var(--ui-font, inherit);
      color: var(--ui-text, #1b2430);
    }

    .card__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid var(--ui-border, #e3e8f0);
    }

    .card__heading {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 700;
    }

    .card__subheading {
      margin: 0.2rem 0 0;
      font-size: 0.85rem;
      color: var(--ui-text-muted, #667085);
    }

    .card__body {
      padding: 1.25rem;
    }

    .card__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.6rem;
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--ui-border, #e3e8f0);
      background: var(--ui-surface-2, #f0f3f9);
    }

    .card__footer:empty {
      display: none;
    }
  `,
})
export class UiCard {
  readonly heading = input('');
  readonly subheading = input('');
}
