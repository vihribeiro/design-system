import { Component } from '@angular/core';
import { UiAvatar, UiBadge, UiButton, UiCard, UiSpinner } from 'ui';
import { DemoBlock } from '../shared/demo-block';

@Component({
  selector: 'page-display',
  imports: [DemoBlock, UiAvatar, UiBadge, UiButton, UiCard, UiSpinner],
  template: `
    <header class="page-head">
      <h1>Exibição</h1>
      <p>Elementos de apresentação de dados e conteúdo.</p>
    </header>

    <demo-block
      title="Badge"
      description="Tons semânticos em três variantes."
      code="<ui-badge tone=&quot;success&quot;>Pago</ui-badge>
<ui-badge tone=&quot;warning&quot; variant=&quot;solid&quot;>Pendente</ui-badge>
<ui-badge tone=&quot;danger&quot; variant=&quot;outline&quot;>Cancelado</ui-badge>"
    >
      <ui-badge tone="neutral">Neutro</ui-badge>
      <ui-badge tone="primary">Primary</ui-badge>
      <ui-badge tone="success">Pago</ui-badge>
      <ui-badge tone="warning" variant="solid">Pendente</ui-badge>
      <ui-badge tone="danger" variant="outline">Cancelado</ui-badge>
      <ui-badge tone="info">Info</ui-badge>
    </demo-block>

    <demo-block
      title="Avatar"
      description="Iniciais geradas a partir do nome ou imagem."
      code="<ui-avatar name=&quot;Vinícius Ribeiro&quot; />
<ui-avatar name=&quot;Ana Souza&quot; [size]=&quot;56&quot; />"
    >
      <ui-avatar name="Vinícius Ribeiro" />
      <ui-avatar name="Ana Souza" [size]="56" />
      <ui-avatar name="Carlos" [size]="32" />
    </demo-block>

    <demo-block
      title="Spinner"
      description="Indicador de carregamento com tamanho configurável."
      code="<ui-spinner [size]=&quot;16&quot; />
<ui-spinner [size]=&quot;28&quot; [thickness]=&quot;3&quot; />"
    >
      <ui-spinner [size]="16" />
      <ui-spinner [size]="24" />
      <ui-spinner [size]="32" [thickness]="3" />
    </demo-block>

    <demo-block
      title="Card"
      description="Contêiner com cabeçalho, corpo e rodapé projetados."
      code="<ui-card heading=&quot;Resumo&quot; subheading=&quot;Últimos 30 dias&quot;>
  <p>Conteúdo do card.</p>
  <ui-button uiCardFooter variant=&quot;secondary&quot;>Ver mais</ui-button>
</ui-card>"
    >
      <div style="width: 100%; max-width: 420px">
        <ui-card heading="Resumo" subheading="Últimos 30 dias">
          <p style="margin: 0; color: var(--ui-text-muted)">
            Faturamento de <strong style="color: var(--ui-text)">R$ 8.973,90</strong> em 72 pedidos.
          </p>
          <ui-button uiCardFooter variant="secondary" size="sm">Ver mais</ui-button>
        </ui-card>
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
      color: var(--ui-text-muted);
    }
  `,
})
export class Display {}
