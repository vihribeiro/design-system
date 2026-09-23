import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ui-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInput),
      multi: true,
    },
  ],
  template: `
    <div class="field">
      @if (label()) {
        <label class="field__label" [attr.for]="controlId">{{ label() }}</label>
      }

      <div class="field__control" [class.is-disabled]="isDisabled()">
        <span class="field__prefix"><ng-content select="[uiPrefix]" /></span>
        <input
          class="field__input"
          [id]="controlId"
          [type]="type()"
          [placeholder]="placeholder()"
          [value]="value()"
          [disabled]="isDisabled()"
          [attr.aria-invalid]="error() ? true : null"
          [attr.aria-describedby]="error() ? controlId + '-error' : hint() ? controlId + '-hint' : null"
          (input)="handleInput($event)"
          (blur)="handleBlur()"
        />
        <span class="field__suffix"><ng-content select="[uiSuffix]" /></span>
      </div>

      @if (error()) {
        <span class="field__error" [id]="controlId + '-error'">{{ error() }}</span>
      } @else if (hint()) {
        <span class="field__hint" [id]="controlId + '-hint'">{{ hint() }}</span>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      font-family: var(--ui-font, inherit);
    }

    .field__label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--ui-text-muted, #667085);
    }

    .field__control {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--ui-surface, #fff);
      border: 1px solid var(--ui-border, #e3e8f0);
      border-radius: var(--ui-radius, 10px);
      padding: 0 0.75rem;
      transition:
        border-color var(--ui-transition, 0.15s ease),
        box-shadow var(--ui-transition, 0.15s ease);
    }

    .field__control:focus-within {
      border-color: var(--ui-color-primary, #0a8f5b);
      box-shadow: 0 0 0 3px var(--ui-color-primary-soft, #e4f5ee);
    }

    .field__control:has(.field__input[aria-invalid='true']) {
      border-color: var(--ui-color-danger, #d92d20);
    }

    .field__control.is-disabled {
      background: var(--ui-surface-2, #f0f3f9);
      opacity: 0.7;
    }

    .field__input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      background: transparent;
      padding: 0.65rem 0;
      font-family: inherit;
      font-size: 0.92rem;
      color: var(--ui-text, #1b2430);
    }

    .field__input::placeholder {
      color: var(--ui-text-muted, #667085);
    }

    .field__prefix,
    .field__suffix {
      display: inline-flex;
      color: var(--ui-text-muted, #667085);
    }

    .field__prefix:empty,
    .field__suffix:empty {
      display: none;
    }

    .field__error {
      font-size: 0.78rem;
      color: var(--ui-color-danger, #d92d20);
    }

    .field__hint {
      font-size: 0.78rem;
      color: var(--ui-text-muted, #667085);
    }
  `,
})
export class UiInput implements ControlValueAccessor {
  readonly label = input('');
  readonly type = input<'text' | 'email' | 'password' | 'number' | 'search' | 'tel'>('text');
  readonly placeholder = input('');
  readonly hint = input('');
  readonly error = input('');
  readonly disabledInput = input(false, { alias: 'disabled' });

  protected readonly controlId = `ui-input-${nextId++}`;
  protected readonly value = signal('');
  private readonly formDisabled = signal(false);

  protected readonly isDisabled = computed(() => this.disabledInput() || this.formDisabled());

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.value.set(value == null ? '' : String(value));
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  protected handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }

  protected handleBlur(): void {
    this.onTouched();
  }
}
