import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { TocService } from '../core/toc.service';

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Component({
  selector: 'demo-block',
  template: `
    <section class="demo" [id]="anchorId()">
      <header class="demo__head">
        <div>
          <h3 class="demo__title">{{ title() }}</h3>
          @if (description()) {
            <p class="demo__description">{{ description() }}</p>
          }
        </div>
        @if (code()) {
          <button type="button" class="demo__copy" (click)="copy()">
            {{ copied() ? 'Copiado' : 'Copiar' }}
          </button>
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
      margin-bottom: 1.75rem;
      scroll-margin-top: 84px;
    }

    .demo__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.1rem 1.25rem;
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

    .demo__copy {
      flex-shrink: 0;
      border: 1px solid var(--ui-border);
      background: transparent;
      color: var(--ui-text-muted);
      border-radius: 999px;
      padding: 0.3rem 0.7rem;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition:
        background var(--ui-transition),
        color var(--ui-transition);
    }

    .demo__copy:hover {
      background: var(--ui-surface-2);
      color: var(--ui-text);
    }

    .demo__preview {
      padding: 1.75rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
      background:
        radial-gradient(circle at 1px 1px, var(--ui-border) 1px, transparent 0) 0 0 / 16px 16px;
    }

    .demo__code {
      margin: 0;
      padding: 1.1rem 1.25rem;
      background: var(--ui-bg-subtle);
      border-top: 1px solid var(--ui-border);
      overflow-x: auto;
      font-size: 0.8rem;
      line-height: 1.65;
    }

    .demo__code code {
      font-family: 'JetBrains Mono', 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      color: var(--ui-text);
    }
  `,
})
export class DemoBlock implements OnInit {
  readonly title = input.required<string>();
  readonly description = input('');
  readonly code = input('');

  readonly copied = signal(false);
  readonly anchorId = computed(() => slugify(this.title()));

  private readonly toc = inject(TocService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.toc.register({ id: this.anchorId(), title: this.title() });
    this.destroyRef.onDestroy(() => this.toc.unregister(this.anchorId()));
  }

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1500);
    } catch {
      // clipboard indisponível
    }
  }
}
