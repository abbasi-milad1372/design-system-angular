import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory: () => typeof window !== 'undefined' ? window : {} as Window
});
