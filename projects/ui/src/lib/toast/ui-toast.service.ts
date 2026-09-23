import { Injectable, signal } from '@angular/core';

export type UiToastTone = 'info' | 'success' | 'warning' | 'danger';

export interface UiToast {
  id: number;
  message: string;
  tone: UiToastTone;
  title?: string;
}

export interface UiToastOptions {
  tone?: UiToastTone;
  title?: string;
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class UiToastService {
  private readonly toastsSignal = signal<UiToast[]>([]);
  readonly toasts = this.toastsSignal.asReadonly();

  private sequence = 0;

  show(message: string, options: UiToastOptions = {}): number {
    const id = ++this.sequence;
    this.toastsSignal.update((toasts) => [
      ...toasts,
      { id, message, tone: options.tone ?? 'info', title: options.title },
    ]);

    const duration = options.duration ?? 4000;
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }

  success(message: string, title?: string): number {
    return this.show(message, { tone: 'success', title });
  }

  error(message: string, title?: string): number {
    return this.show(message, { tone: 'danger', title });
  }

  warning(message: string, title?: string): number {
    return this.show(message, { tone: 'warning', title });
  }

  info(message: string, title?: string): number {
    return this.show(message, { tone: 'info', title });
  }

  dismiss(id: number): void {
    this.toastsSignal.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  clear(): void {
    this.toastsSignal.set([]);
  }
}
