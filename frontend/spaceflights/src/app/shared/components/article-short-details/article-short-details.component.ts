import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-article-short-details',
  templateUrl: './article-short-details.component.html',
  styleUrls: ['./article-short-details.component.scss']
})
export class ArticleShortDetailsComponent{

  @Input() article: Article;

  constructor(private router: Router, private toastService: ToastService) {}

  navigate(){
    this.router.navigate(['/articles', this.article.id]);
  }

  favouriteArticleChange(){
    const message = this.article.isFavourite ? 'Article added to favourites' : 'Article removed from favourites';
    this.toastService.showToast(message);
  }
}
