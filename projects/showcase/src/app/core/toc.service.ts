import { Injectable, signal } from '@angular/core';

export interface TocItem {
  id: string;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class TocService {
  private readonly items = signal<TocItem[]>([]);
  readonly sections = this.items.asReadonly();

  register(item: TocItem): void {
    this.items.update((list) =>
      list.some((entry) => entry.id === item.id) ? list : [...list, item],
    );
  }

  unregister(id: string): void {
    this.items.update((list) => list.filter((entry) => entry.id !== id));
  }
}
