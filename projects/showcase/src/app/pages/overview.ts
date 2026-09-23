import { Component } from '@angular/core';
import { UiAlert, UiBadge } from 'ui';
import { DemoBlock } from '../shared/demo-block';

@Component({
  selector: 'page-overview',
  imports: [DemoBlock, UiBadge, UiAlert],
  template: `
    <header class="page-head">
      <ui-badge tone="primary">v0.1.0</ui-badge>
      <h1>&#64;vihribeiro/ui</h1>
      <p>
        Design system em Angular com componentes <strong>standalone</strong>, tipados e
        acessíveis, construídos sobre design tokens e com suporte a tema claro/escuro.
      </p>
    </header>

    <demo-block
      title="Instalação"
      description="A biblioteca é distribuída como pacote Angular (ng-packagr)."
      code="npm install @vihribeiro/ui"
    >
      <div class="steps">
        <div class="step"><span>1</span> Instale o pacote</div>
        <div class="step"><span>2</span> Importe o tema (tokens)</div>
        <div class="step"><span>3</span> Use os componentes</div>
      </div>
    </demo-block>

    <demo-block
      title="Uso"
      description="Componentes são standalone: basta importar onde forem usados."
      code="import { UiButton, UiCard } from '@vihribeiro/ui';

@Component({
  selector: 'app-demo',
  imports: [UiButton, UiCard],
  template: \`
    <ui-card heading=&quot;Olá&quot;>
      <ui-button variant=&quot;primary&quot;>Clique</ui-button>
    </ui-card>
  \`,
})
export class DemoComponent {}"
    >
      <div class="note">
        Todos os componentes usam <code>input()</code> / <code>output()</code> e sinais,
        no padrão do Angular moderno.
      </div>
    </demo-block>

    <ui-alert tone="info" title="Acessibilidade">
      Componentes com foco visível, atributos ARIA e respeito a
      <code>prefers-reduced-motion</code>.
    </ui-alert>
  `,
  styles: `
    .page-head {
      margin-bottom: 2rem;
    }
    .page-head h1 {
      margin: 0.75rem 0 0.5rem;
      font-size: 2rem;
      letter-spacing: -0.02em;
    }
    .page-head p {
      margin: 0;
      max-width: 60ch;
      color: var(--ui-text-muted);
    }
    .steps {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .step {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.7rem 1rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius);
      background: var(--ui-surface);
      font-size: 0.88rem;
      font-weight: 500;
    }
    .step span {
      display: grid;
      place-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--ui-color-primary-soft);
      color: var(--ui-color-primary-hover);
      font-size: 0.78rem;
      font-weight: 700;
    }
    .note {
      font-size: 0.9rem;
      color: var(--ui-text-muted);
    }
    code {
      font-family: 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      background: var(--ui-surface-2);
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
      font-size: 0.85em;
    }
  `,
})
export class Overview {}
