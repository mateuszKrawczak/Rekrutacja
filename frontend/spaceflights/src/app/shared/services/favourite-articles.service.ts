import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteArticlesService {

private articlesSource = new BehaviorSubject<Article[]>(JSON.parse(localStorage.getItem('articles'))|| []);
// eslint-disable-next-line @typescript-eslint/member-ordering
articles$ = this.articlesSource.asObservable();
get articles(): Article[]{
 return  this.articlesSource.value;
}

 constructor(private toastService: ToastService)
  {
    this.articles$ = this.articlesSource.asObservable();
  }


  updateFavouriteArticles(article: Article){
    const message = article.isFavourite ? this.addArticle(article) : this.removeArticle(article);
    this.updateLocalStorage();
    this.toastService.showToast(message);
  }

  addArticle(article: Article): string{
    const articlesArray = this.articles;
    articlesArray.push(article);
    this.articlesSource.next(articlesArray);
    return 'Article added to favourites';
  }

  removeArticle(article: Article): string{
    const articlesArray = this.articles;
    articlesArray.splice(articlesArray.findIndex(a=>a.id===article.id),1);
    this.articlesSource.next(articlesArray);
    return 'Article removed from favourites';
  }

  checkFavourite(id: number){
      return this.articles.some(article => article.id === id);
  }

  updateLocalStorage(){
    const articles = this.articles;
    localStorage.setItem('articles', JSON.stringify(articles));
  }
}
