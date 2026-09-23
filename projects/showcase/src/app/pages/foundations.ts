import { Component } from '@angular/core';
import { DemoBlock } from '../shared/demo-block';

interface Swatch {
  name: string;
  token: string;
}

@Component({
  selector: 'page-foundations',
  imports: [DemoBlock],
  template: `
    <header class="page-head">
      <h1>Fundamentos</h1>
      <p>
        Os componentes são construídos sobre tokens CSS (<code>--ui-*</code>). Trocar o tema
        é apenas alterar esses valores — nenhum componente precisa mudar.
      </p>
    </header>

    <demo-block
      title="Cores"
      description="Tokens semânticos com variantes soft para fundos."
    >
      <div class="swatches">
        @for (swatch of swatches; track swatch.token) {
          <div class="swatch">
            <span class="swatch__color" [style.background]="'var(' + swatch.token + ')'"></span>
            <div class="swatch__info">
              <strong>{{ swatch.name }}</strong>
              <code>{{ swatch.token }}</code>
            </div>
          </div>
        }
      </div>
    </demo-block>

    <demo-block title="Tipografia" description="Fonte base configurável via --ui-font.">
      <div class="type">
        <p class="t-xl">Título extra grande</p>
        <p class="t-lg">Título grande</p>
        <p class="t-md">Subtítulo médio</p>
        <p class="t-base">Texto padrão de parágrafo para leitura confortável.</p>
        <p class="t-muted">Texto auxiliar / muted.</p>
      </div>
    </demo-block>

    <demo-block title="Raios e sombras" description="Escala de bordas e elevação.">
      <div class="tokens">
        @for (radius of radii; track radius.token) {
          <div class="token">
            <span class="token__box" [style.border-radius]="'var(' + radius.token + ')'"></span>
            <code>{{ radius.token }}</code>
          </div>
        }
      </div>
      <div class="tokens">
        @for (shadow of shadows; track shadow.token) {
          <div class="token">
            <span class="token__box token__box--shadow" [style.box-shadow]="'var(' + shadow.token + ')'"></span>
            <code>{{ shadow.token }}</code>
          </div>
        }
      </div>
    </demo-block>
  `,
  styles: `
    .page-head {
      margin-bottom: 2rem;
    }
    .page-head h1 {
      margin: 0 0 0.5rem;
      font-size: 2rem;
      letter-spacing: -0.02em;
    }
    .page-head p {
      margin: 0;
      max-width: 60ch;
      color: var(--ui-text-muted);
    }
    .swatches {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 0.75rem;
      width: 100%;
    }
    .swatch {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.6rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius);
      background: var(--ui-surface);
    }
    .swatch__color {
      width: 40px;
      height: 40px;
      border-radius: var(--ui-radius-sm);
      border: 1px solid var(--ui-border);
      flex-shrink: 0;
    }
    .swatch__info {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .swatch__info strong {
      font-size: 0.85rem;
    }
    .swatch__info code {
      font-size: 0.72rem;
      color: var(--ui-text-muted);
    }
    .type p {
      margin: 0 0 0.5rem;
      width: 100%;
    }
    .t-xl {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .t-lg {
      font-size: 1.35rem;
      font-weight: 700;
    }
    .t-md {
      font-size: 1.05rem;
      font-weight: 600;
    }
    .t-muted {
      color: var(--ui-text-muted);
      font-size: 0.85rem;
    }
    .tokens {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
    }
    .token {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .token__box {
      width: 72px;
      height: 56px;
      background: var(--ui-surface-2);
      border: 1px solid var(--ui-border);
    }
    .token__box--shadow {
      background: var(--ui-surface);
      border-radius: var(--ui-radius);
    }
    code {
      font-family: 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      background: var(--ui-surface-2);
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
      font-size: 0.8em;
    }
  `,
})
export class Foundations {
  readonly swatches: Swatch[] = [
    { name: 'Primary', token: '--ui-color-primary' },
    { name: 'Success', token: '--ui-color-success' },
    { name: 'Warning', token: '--ui-color-warning' },
    { name: 'Danger', token: '--ui-color-danger' },
    { name: 'Info', token: '--ui-color-info' },
    { name: 'Neutral', token: '--ui-color-neutral' },
    { name: 'Surface', token: '--ui-surface' },
    { name: 'Border', token: '--ui-border' },
  ];

  readonly radii = [
    { token: '--ui-radius-sm' },
    { token: '--ui-radius' },
    { token: '--ui-radius-lg' },
    { token: '--ui-radius-full' },
  ];

  readonly shadows = [{ token: '--ui-shadow-sm' }, { token: '--ui-shadow' }, { token: '--ui-shadow-lg' }];
}
