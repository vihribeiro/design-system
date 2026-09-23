import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.font-size.px]': 'size() * 0.4',
  },
  template: `
    @if (src()) {
      <img [src]="src()" [alt]="name()" />
    } @else {
      <span aria-hidden="true">{{ initials() }}</span>
      <span class="sr-only">{{ name() }}</span>
    }
  `,
  styles: `
    :host {
      display: inline-grid;
      place-items: center;
      border-radius: 50%;
      overflow: hidden;
      background: var(--ui-color-primary-soft, #e4f5ee);
      color: var(--ui-color-primary-hover, #076b44);
      font-family: var(--ui-font, inherit);
      font-weight: 700;
      user-select: none;
      flex-shrink: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,
})
export class UiAvatar {
  readonly name = input('');
  readonly src = input<string | null>(null);
  readonly size = input(40);

  readonly initials = computed(() =>
    this.name()
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join(''),
  );
}
