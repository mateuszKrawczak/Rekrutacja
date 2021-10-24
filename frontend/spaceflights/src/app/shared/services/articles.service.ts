import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { DefaullNumberItemsPerPage } from '../models/pagination-settings';
import { FavouriteArticlesService } from './favourite-articles.service';

@Injectable()
export class ArticlesService {
apiUrl = environment.api;
constructor(private http: HttpClient, private favouriteArticlesService: FavouriteArticlesService) {}


  getArticles(page:number){
    let params = new HttpParams();
    params = params.append("_limit", DefaullNumberItemsPerPage)

    const startItems = page >= 2 ? DefaullNumberItemsPerPage * (page-1) : 0;
    params = params.append("_start", startItems)

    return this.http.get<Article[]>(`${this.apiUrl}articles`, {params});
  }

  getArticleDetails(id: number){
    return this.http.get<Article>(`${this.apiUrl}articles/${id}`).pipe(tap(article=>this.checkFavourite(article)));
  }

  getArticleLaunchDetails(id: string){
    return this.http.get<Article>(`${this.apiUrl}articles/launch/${id}`).pipe(tap(article=>this.checkFavourite(article)));
  }

  getArticleEventDetails(id: number){
    return this.http.get<Article>(`${this.apiUrl}articles/event/${id}`).pipe(tap(article=>this.checkFavourite(article)));
  }

  checkFavourite(article: Article){
     article.isFavourite = this.favouriteArticlesService.checkFavourite(article.id);
     return article;
    }
}
