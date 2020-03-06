import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'lpr-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {

}
