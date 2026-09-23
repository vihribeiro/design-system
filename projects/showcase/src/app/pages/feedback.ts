import { Component, inject, signal } from '@angular/core';
import { UiAlert, UiButton, UiModal, UiToastService } from 'ui';
import { DemoBlock } from '../shared/demo-block';

@Component({
  selector: 'page-feedback',
  imports: [DemoBlock, UiAlert, UiButton, UiModal],
  template: `
    <header class="page-head">
      <h1>Feedback</h1>
      <p>Comunicação de estados, confirmações e notificações.</p>
    </header>

    <demo-block
      title="Alert"
      description="Mensagens contextuais, opcionalmente dispensáveis."
      code="<ui-alert tone=&quot;success&quot; title=&quot;Salvo&quot;>Alterações salvas.</ui-alert>
<ui-alert tone=&quot;warning&quot; [dismissible]=&quot;true&quot;>Atenção com o prazo.</ui-alert>"
    >
      <div class="stack">
        <ui-alert tone="info" title="Informação">Sua conta será analisada em até 24h.</ui-alert>
        <ui-alert tone="success" title="Tudo certo">Cadastro realizado com sucesso.</ui-alert>
        <ui-alert tone="warning" title="Atenção">O prazo de envio termina amanhã.</ui-alert>
        <ui-alert tone="danger" title="Erro" [dismissible]="true">
          Não foi possível processar o pagamento.
        </ui-alert>
      </div>
    </demo-block>

    <demo-block
      title="Modal"
      description="Diálogo com projeção de conteúdo e rodapé de ações."
      code="<ui-modal title=&quot;Confirmar&quot; [open]=&quot;open()&quot; (closed)=&quot;open.set(false)&quot;>
  <p>Tem certeza?</p>
  <ui-button uiModalFooter variant=&quot;ghost&quot; (click)=&quot;open.set(false)&quot;>Cancelar</ui-button>
</ui-modal>"
    >
      <ui-button variant="primary" (click)="modalOpen.set(true)">Abrir modal</ui-button>
    </demo-block>

    <demo-block
      title="Toast"
      description="Notificações via serviço injetável; basta um contêiner no app."
      code="toast.success('Alterações salvas.', 'Sucesso');
toast.error('Falha ao conectar.');"
    >
      <ui-button variant="secondary" (click)="showToast('success')">Sucesso</ui-button>
      <ui-button variant="secondary" (click)="showToast('info')">Info</ui-button>
      <ui-button variant="secondary" (click)="showToast('warning')">Aviso</ui-button>
      <ui-button variant="secondary" (click)="showToast('danger')">Erro</ui-button>
    </demo-block>

    <ui-modal title="Confirmar ação" [open]="modalOpen()" (closed)="modalOpen.set(false)">
      <p style="margin: 0; color: var(--ui-text-muted)">
        Deseja realmente continuar? Esta ação não pode ser desfeita.
      </p>
      <ui-button uiModalFooter variant="ghost" (click)="modalOpen.set(false)">Cancelar</ui-button>
      <ui-button uiModalFooter variant="primary" (click)="modalOpen.set(false)">Confirmar</ui-button>
    </ui-modal>
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
    .stack {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
    }
  `,
})
export class Feedback {
  private readonly toast = inject(UiToastService);

  readonly modalOpen = signal(false);

  showToast(tone: 'success' | 'info' | 'warning' | 'danger'): void {
    this.toast.show('Notificação de exemplo do design system.', {
      tone,
      title: 'Seller Hub',
    });
  }
}
