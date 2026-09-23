import { Component, input } from '@angular/core';

@Component({
  selector: 'demo-block',
  template: `
    <section class="demo">
      <header class="demo__head">
        <h3 class="demo__title">{{ title() }}</h3>
        @if (description()) {
          <p class="demo__description">{{ description() }}</p>
        }
      </header>

      <div class="demo__preview">
        <ng-content />
      </div>

      @if (code()) {
        <pre class="demo__code"><code>{{ code() }}</code></pre>
      }
    </section>
  `,
  styles: `
    .demo {
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius-lg);
      overflow: hidden;
      background: var(--ui-surface);
      margin-bottom: 1.5rem;
    }

    .demo__head {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--ui-border);
    }

    .demo__title {
      margin: 0;
      font-size: 1rem;
    }

    .demo__description {
      margin: 0.3rem 0 0;
      font-size: 0.85rem;
      color: var(--ui-text-muted);
    }

    .demo__preview {
      padding: 1.5rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
      background:
        radial-gradient(circle at 1px 1px, var(--ui-border) 1px, transparent 0) 0 0 / 16px 16px;
    }

    .demo__code {
      margin: 0;
      padding: 1rem 1.25rem;
      background: var(--ui-bg-subtle);
      border-top: 1px solid var(--ui-border);
      overflow-x: auto;
      font-size: 0.8rem;
      line-height: 1.6;
    }

    .demo__code code {
      font-family: 'SFMono-Regular', ui-monospace, 'Cascadia Code', Menlo, Consolas, monospace;
      color: var(--ui-text);
    }
  `,
})
export class DemoBlock {
  readonly title = input.required<string>();
  readonly description = input('');
  readonly code = input('');
}
