import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { SettingsService } from '../core/settings.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <aside [style.width]="'300px'" 
           [style.height]="'100%'" 
           [style.background]="'#f7f9fc'" 
           [style.color]="'#222'"
           [style.borderRight]="'1px solid #edf1f7'" 
           [style.padding]="'1.5rem'" 
           [style.boxSizing]="'border-box'" 
           [style.fontFamily]="'sans-serif'">
      <div [style.marginBottom]="'2rem'">
        <h3 [style.margin]="'0 0 1.5rem 0'" [style.fontSize]="'1.2rem'" [style.color]="'#222'">Configuration</h3>
        
        <div class="setting-row" [style.display]="'flex'" [style.justifyContent]="'space-between'" [style.alignItems]="'center'" [style.marginBottom]="'1rem'">
          <span [style.color]="'#444'">Dark Mode</span>
          <input type="checkbox" [checked]="settings.darkMode()" (change)="settings.darkMode.set($any($event.target).checked)">
        </div>

        <div class="setting-row" [style.display]="'flex'" [style.justifyContent]="'space-between'" [style.alignItems]="'center'" [style.marginBottom]="'1rem'">
          <span [style.color]="'#444'">Sticky Info</span>
          <input type="checkbox" [checked]="settings.stickyInfo()" (change)="settings.stickyInfo.set($any($event.target).checked)">
        </div>

        <div class="setting-row" [style.display]="'flex'" [style.justifyContent]="'space-between'" [style.alignItems]="'center'" [style.marginBottom]="'1rem'">
          <span [style.color]="'#444'">Sticky Study Info</span>
          <input type="checkbox" [checked]="settings.stickyStudyInfo()" (change)="settings.stickyStudyInfo.set($any($event.target).checked)">
        </div>
      </div>
    </aside>
  `
})
export class SidenavComponent {
  protected settings = inject(SettingsService);
}
