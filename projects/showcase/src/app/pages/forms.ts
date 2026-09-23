import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiButton, UiInput, UiSwitch } from 'ui';
import { DemoBlock } from '../shared/demo-block';

@Component({
  selector: 'page-forms',
  imports: [DemoBlock, ReactiveFormsModule, UiButton, UiInput, UiSwitch],
  template: `
    <header class="page-head">
      <h1>Formulários</h1>
      <p>Campos com suporte nativo a Reactive Forms via <code>ControlValueAccessor</code>.</p>
    </header>

    <demo-block
      title="Input — estados"
      description="Rótulo, dica de preenchimento e mensagem de erro."
      code="<ui-input label=&quot;Nome&quot; placeholder=&quot;Seu nome&quot; />
<ui-input label=&quot;E-mail&quot; hint=&quot;Usaremos apenas para contato.&quot; />
<ui-input label=&quot;Senha&quot; type=&quot;password&quot; error=&quot;Mínimo de 8 caracteres.&quot; />"
    >
      <div class="field-stack">
        <ui-input label="Nome" placeholder="Seu nome" />
        <ui-input label="E-mail" hint="Usaremos apenas para contato." />
        <ui-input label="Senha" type="password" error="Mínimo de 8 caracteres." />
        <ui-input label="Desabilitado" [disabled]="true" />
      </div>
    </demo-block>

    <demo-block
      title="Formulário reativo"
      description="Validação integrada: os erros refletem o estado do FormControl."
      code="<form [formGroup]=&quot;form&quot; (ngSubmit)=&quot;submit()&quot;>
  <ui-input label=&quot;Nome&quot; formControlName=&quot;name&quot;
    [error]=&quot;showError('name') ? 'Informe ao menos 3 caracteres.' : ''&quot; />
  <ui-input label=&quot;E-mail&quot; formControlName=&quot;email&quot;
    [error]=&quot;showError('email') ? 'E-mail inválido.' : ''&quot; />
  <ui-switch label=&quot;Receber novidades&quot; formControlName=&quot;newsletter&quot; />
  <ui-button type=&quot;submit&quot; [fullWidth]=&quot;true&quot;>Enviar</ui-button>
</form>"
    >
      <form class="form" [formGroup]="form" (ngSubmit)="submit()">
        <ui-input
          label="Nome"
          placeholder="Como podemos te chamar?"
          formControlName="name"
          [error]="showError('name') ? 'Informe ao menos 3 caracteres.' : ''"
        />
        <ui-input
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          formControlName="email"
          [error]="showError('email') ? 'Informe um e-mail válido.' : ''"
        />
        <ui-switch label="Receber novidades" formControlName="newsletter" />

        <ui-button type="submit" [fullWidth]="true">Enviar</ui-button>

        @if (submitted && form.valid) {
          <p class="success">
            Enviado: {{ form.getRawValue().name }} · {{ form.getRawValue().email }} ·
            newsletter: {{ form.getRawValue().newsletter ? 'sim' : 'não' }}
          </p>
        }
      </form>
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
    .field-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 420px;
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 420px;
    }
    .success {
      margin: 0;
      font-size: 0.85rem;
      color: var(--ui-color-success);
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
export class Forms {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    newsletter: [true],
  });

  submitted = false;

  showError(controlName: 'name' | 'email'): boolean {
    const control = this.form.controls[controlName];
    return control.touched && control.invalid;
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
