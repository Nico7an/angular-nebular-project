import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { 
  NbCardModule, 
  NbUserModule, 
  NbButtonModule, 
  NbIconModule,
  NbTagModule,
  NbAccordionModule,
  NbAlertModule,
  NbLayoutModule
} from '@nebular/theme';

import { ArticleInfoComponent } from './article-info';
import { SettingsService } from '../core/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NbCardModule, 
    NbUserModule, 
    NbButtonModule, 
    NbIconModule,
    NbTagModule,
    NbAccordionModule,
    NbAlertModule,
    NbLayoutModule,
    ArticleInfoComponent
  ],
  template: `
    <nb-layout [style.height]="'100%'">
      <nb-layout-header [style.position]="'sticky'" [style.top]="'0'" [style.zIndex]="'1000'">
        <div [style.display]="'flex'" [style.alignItems]="'center'" [style.width]="'100%'">
          <span class="logo" [style.fontSize]="'1.25rem'" [style.fontWeight]="'bold'" [style.marginRight]="'auto'">
            Magasine Ipsum
          </span>
          <button nbButton ghost status="basic">Retour aux articles</button>
          <button nbButton status="primary" [style.marginLeft]="'1rem'">S'abonner</button>
        </div>
      </nb-layout-header>

      <nb-layout-column>
        <nb-alert status="info" closable 
          [style.position]="settings.stickyInfo() ? 'sticky' : 'static'" 
          [style.top]="settings.stickyInfo() ? '4.75rem' : 'auto'" 
          [style.zIndex]="settings.stickyInfo() ? '999' : 'auto'">
          <strong>Information importante :</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse potenti. In hac habitasse platea dictumst.
        </nb-alert>

        <article>
          <div [style.marginBottom]="'1.5rem'">
            <nb-tag text="Philosophie" status="primary" size="small" [style.marginRight]="'0.5rem'"></nb-tag>
            <nb-tag text="Essai" status="basic" size="small"></nb-tag>
          </div>
          
          <h1>De Finibus Bonorum et Malorum : Une exploration approfondie du Lorem Ipsum</h1>
          
          <app-article-info [isSticky]="settings.stickyStudyInfo()"></app-article-info>

          <div [style.display]="'flex'" [style.justifyContent]="'space-between'" [style.alignItems]="'center'" [style.margin]="'2rem 0'">
            <nb-user 
              name="Marcus Tullius Cicero" 
              title="Orateur & Homme d'État" 
              size="large">
            </nb-user>
            <div [style.display]="'flex'" [style.flexDirection]="'column'" [style.alignItems]="'flex-end'">
              <span [style.fontSize]="'0.85rem'" [style.color]="'gray'">Publié le 6 Mars 2026</span>
              <span [style.fontSize]="'0.85rem'" [style.color]="'gray'">Lecture : 15 min</span>
            </div>
          </div>

          <p [style.fontStyle]="'italic'" [style.color]="'gray'" [style.marginBottom]="'3rem'" [style.fontSize]="'1.25rem'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem sit amet nisi aliquet 
            pellentesque. Etiam sit amet sem ac ex sollicitudin pretium. Praesent eu massa vel nisl tincidunt 
            commodo. In hac habitasse platea dictumst.
          </p>

          <div [style.display]="'flex'" [style.gap]="'1rem'" [style.margin]="'3rem 0'">
            <nb-card status="basic" [style.flex]="'1'">
              <nb-card-header>Lorem Ipsum I</nb-card-header>
              <nb-card-body>
                Quisque at risus nec libero ullamcorper hendrerit. Etiam id felis eleifend, pretium neque a, molestie leo.
              </nb-card-body>
            </nb-card>

            <nb-card status="basic" [style.flex]="'1'">
              <nb-card-header>Lorem Ipsum II</nb-card-header>
              <nb-card-body>
                Suspendisse pulvinar erat sit amet purus sollicitudin, sed fermentum ex lacinia. Donec vehicula lorem.
              </nb-card-body>
            </nb-card>
          </div>

          <h2>I. L'origine du texte classique</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
            ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
            quam nihil molestiae consequatur.
          </p>

          <blockquote>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          </blockquote>

          <h2>II. La structure syntaxique et sémantique</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
            fuga. Et harum quidem rerum facilis est et expedita distinctio. 
          </p>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi opticumque nihil impedit quo minus id quod maxime 
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem 
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae 
            sint et molestiae non recusandae. 
          </p>

          <div [style.margin]="'3rem 0'" [style.textAlign]="'center'">
            <div [style.width]="'100%'" [style.height]="'300px'" [style.background]="'#edf1f7'" [style.display]="'flex'" [style.alignItems]="'center'" [style.justifyContent]="'center'" [style.fontSize]="'1.5rem'" [style.color]="'gray'" [style.borderRadius]="'4px'" [style.marginBottom]="'1rem'">
              Visual Representation Ipsum
            </div>
            <span [style.fontSize]="'0.9rem'" [style.color]="'gray'" [style.fontStyle]="'italic'">Figure 1.1 : Analyse structurelle de la distribution des caractères.</span>
          </div>

          <h2>III. L'évolution à travers les âges</h2>
          <p>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
            consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Mauris placerat, sapien sit amet tincidunt finibus, mi lorem venenatis elit, 
            id fringilla dolor ipsum in odio. 
          </p>

          <nb-accordion [style.margin]="'3rem 0'">
            <nb-accordion-item>
              <nb-accordion-item-header>Note additionnelle sur le Lorem Ipsum</nb-accordion-item-header>
              <nb-accordion-item-body>
                Mauris non tempor quam, et lacinia sapien. Mauris accumsan, massa non finibus elementum, 
                diam sapien tristique neque, sed iaculis velit enim vitae justo. Nullam magna purus, 
                facilisis eu sollicitudin vitae, interdum sit amet magna.
              </nb-accordion-item-body>
            </nb-accordion-item>
          </nb-accordion>

          <h2>IV. Conclusion et perspectives</h2>
          <p>
            In ut elementum lectus. In finibus tellus a erat pellentesque, et ultrices dui elementum. 
            Fusce aliquam mi feugiat augue tincidunt, sed aliquet nisl hendrerit. Donec id ante non nisi 
            condimentum aliquet. Aenean rhoncus nisl in massa venenatis, at sagittis lacus pharetra. 
            Donec ac elementum odio. 
          </p>

          <div [style.marginTop]="'4rem'" [style.paddingTop]="'2rem'" [style.borderTop]="'1px solid #edf1f7'">
            <h3>À propos de l'auteur</h3>
            <p>
              Marcus Tullius Cicero était un homme d'État romain, avocat, érudit, philosophe et académicien sceptique. 
              Il est largement considéré comme l'un des plus grands orateurs et stylistes de prose de Rome.
            </p>
          </div>

          <div [style.display]="'flex'" [style.gap]="'1rem'" [style.marginTop]="'3rem'">
            <button nbButton status="primary">Partager l'article</button>
            <button nbButton ghost status="basic">Signaler une erreur</button>
          </div>
        </article>

        <nb-layout-footer [style.position]="'sticky'" [style.bottom]="'0'" [style.zIndex]="'1000'">
          <div [style.display]="'flex'" [style.justifyContent]="'space-between'" [style.width]="'100%'">
            <span>&copy; 2026 Magasine Ipsum. Tous droits réservés.</span>
            <div [style.display]="'flex'" [style.gap]="'1rem'">
              <button nbButton ghost status="basic" size="small">Twitter</button>
              <button nbButton ghost status="basic" size="small">Instagram</button>
            </div>
          </div>
        </nb-layout-footer>
      </nb-layout-column>
    </nb-layout>
  `
})
export class HomeComponent {
  protected settings = inject(SettingsService);
}
