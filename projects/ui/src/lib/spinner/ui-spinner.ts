import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  template: `
    <span
      class="spinner"
      role="status"
      [attr.aria-label]="label()"
      [style.width.px]="size()"
      [style.height.px]="size()"
      [style.border-width.px]="thickness()"
    ></span>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .spinner {
      display: inline-block;
      border-style: solid;
      border-color: currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: ui-spin 0.7s linear infinite;
      opacity: 0.9;
    }

    @keyframes ui-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation-duration: 1.6s;
      }
    }
  `,
})
export class UiSpinner {
  readonly size = input(20);
  readonly thickness = input(2);
  readonly label = input('Carregando');
}
