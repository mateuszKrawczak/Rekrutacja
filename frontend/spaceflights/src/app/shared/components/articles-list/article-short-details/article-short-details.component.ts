import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-article-short-details',
  templateUrl: './article-short-details.component.html',
  styleUrls: ['./article-short-details.component.scss']
})
export class ArticleShortDetailsComponent {

  @Input() article: Article;
  constructor(private router: Router) { }

  navigate(){
    this.router.navigate(['/articles', this.article.id]);
  }
}
