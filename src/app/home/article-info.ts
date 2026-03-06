import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-article-info',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NbCardModule, NbIconModule],
  template: `
    <nb-card status="info" 
      [accent]="isSticky() ? 'primary' : ''"
      [style.position]="isSticky() ? 'sticky' : 'static'"
      [style.top]="isSticky() ? '4.75rem' : 'auto'"
      [style.zIndex]="isSticky() ? '10' : 'auto'">
      <nb-card-header>
        <nb-icon icon="info-outline" status="info"></nb-icon>
        <strong>Résumé de l'étude</strong>
      </nb-card-header>
      <nb-card-body>
        <p>
          Cet article explore les fondements philosophiques du Lorem Ipsum à travers l'œuvre de Cicéron, 
          en mettant l'accent sur sa pertinence dans le design moderne.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</p>
        <p>Fusce congue, augue et molestie cursus, augue neque accumsan mauris, quis iaculis sem mauris mollis dignissim.</p>
        <p>Proin ut pretium sem. Maecenas vel mauris vitae neque pharetra finibus. Cras at elementum ante.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </nb-card-body>
    </nb-card>
  `
})
export class ArticleInfoComponent {
  isSticky = input(false);
}
