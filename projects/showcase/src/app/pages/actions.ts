import { Component } from '@angular/core';
import { UiButton, UiSwitch } from 'ui';
import { DemoBlock } from '../shared/demo-block';

@Component({
  selector: 'page-actions',
  imports: [DemoBlock, UiButton, UiSwitch],
  template: `
    <header class="page-head">
      <h1>Ações</h1>
      <p>Componentes que disparam ações: botões e interruptores.</p>
    </header>

    <demo-block
      title="Button — variantes"
      description="Quatro variantes semânticas."
      code="<ui-button variant=&quot;primary&quot;>Primary</ui-button>
<ui-button variant=&quot;secondary&quot;>Secondary</ui-button>
<ui-button variant=&quot;ghost&quot;>Ghost</ui-button>
<ui-button variant=&quot;danger&quot;>Danger</ui-button>"
    >
      <ui-button variant="primary">Primary</ui-button>
      <ui-button variant="secondary">Secondary</ui-button>
      <ui-button variant="ghost">Ghost</ui-button>
      <ui-button variant="danger">Danger</ui-button>
    </demo-block>

    <demo-block
      title="Button — tamanhos e estados"
      description="Tamanhos sm/md/lg, com estado de carregamento e desabilitado."
      code="<ui-button size=&quot;sm&quot;>Small</ui-button>
<ui-button size=&quot;md&quot;>Medium</ui-button>
<ui-button size=&quot;lg&quot;>Large</ui-button>
<ui-button [loading]=&quot;true&quot;>Salvando</ui-button>
<ui-button [disabled]=&quot;true&quot;>Desabilitado</ui-button>"
    >
      <ui-button size="sm">Small</ui-button>
      <ui-button size="md">Medium</ui-button>
      <ui-button size="lg">Large</ui-button>
      <ui-button [loading]="true">Salvando</ui-button>
      <ui-button [disabled]="true">Desabilitado</ui-button>
    </demo-block>

    <demo-block
      title="Button — largura total"
      description="fullWidth ocupa 100% do contêiner."
      code="<ui-button [fullWidth]=&quot;true&quot; variant=&quot;primary&quot;>Entrar</ui-button>"
    >
      <div style="width: 100%">
        <ui-button [fullWidth]="true" variant="primary">Entrar</ui-button>
      </div>
    </demo-block>

    <demo-block
      title="Switch"
      description="Interruptor com suporte a formulários (ControlValueAccessor)."
      code="<ui-switch label=&quot;Notificações por e-mail&quot; />"
    >
      <ui-switch label="Notificações por e-mail" />
      <ui-switch label="Modo escuro automático" />
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
export class Actions {}
