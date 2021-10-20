import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { ArticlesService } from '../../services/articles.service';
import { FavouriteArticlesService } from '../../services/favourite-articles.service';

@Component({
  selector: 'app-article-short-details',
  templateUrl: './article-short-details.component.html',
  styleUrls: ['./article-short-details.component.scss']
})
export class ArticleShortDetailsComponent implements OnInit{

  @Input() article: Article;

  constructor(private router: Router,
    private favouriteArticlesService: FavouriteArticlesService,
    private articlesService: ArticlesService) {}

    ngOnInit(): void {
    this.article = this.articlesService.checkFavourite(this.article);
  }

  navigate(){
    this.router.navigate(['/articles', this.article.id]);
  }

  favouriteArticleChange(){
    this.favouriteArticlesService.updateFavouriteArticles(this.article);
  }
}
