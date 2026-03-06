import { Injectable, signal, effect, inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private themeService = inject(NbThemeService);

  darkMode = signal(false);
  stickyInfo = signal(false);
  stickyStudyInfo = signal(false);

  constructor() {
    effect(() => {
      this.themeService.changeTheme(this.darkMode() ? 'dark' : 'default');
    });
  }
}
