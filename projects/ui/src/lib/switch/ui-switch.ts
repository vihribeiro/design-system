import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-switch',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiSwitch),
      multi: true,
    },
  ],
  template: `
    <label class="switch" [class.is-disabled]="disabled()">
      <input
        type="checkbox"
        class="switch__input"
        [checked]="checked()"
        [disabled]="disabled()"
        (change)="handleChange($event)"
        (blur)="handleBlur()"
      />
      <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
      @if (label()) {
        <span class="switch__label">{{ label() }}</span>
      }
    </label>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    .switch {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      cursor: pointer;
      font-family: var(--ui-font, inherit);
      font-size: 0.9rem;
      color: var(--ui-text, #1b2430);
    }

    .switch.is-disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .switch__input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
    }

    .switch__track {
      position: relative;
      width: 42px;
      height: 24px;
      border-radius: var(--ui-radius-full, 999px);
      background: var(--ui-border, #e3e8f0);
      transition: background var(--ui-transition, 0.15s ease);
      flex-shrink: 0;
    }

    .switch__thumb {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      box-shadow: var(--ui-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.2));
      transition: transform var(--ui-transition, 0.15s ease);
    }

    .switch__input:checked + .switch__track {
      background: var(--ui-color-primary, #0a8f5b);
    }

    .switch__input:checked + .switch__track .switch__thumb {
      transform: translateX(18px);
    }

    .switch__input:focus-visible + .switch__track {
      outline: 2px solid var(--ui-color-primary, #0a8f5b);
      outline-offset: 2px;
    }
  `,
})
export class UiSwitch implements ControlValueAccessor {
  readonly label = input('');

  protected readonly checked = signal(false);
  protected readonly disabled = signal(false);

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.checked.set(Boolean(value));
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected handleChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.checked.set(checked);
    this.onChange(checked);
  }

  protected handleBlur(): void {
    this.onTouched();
  }
}
