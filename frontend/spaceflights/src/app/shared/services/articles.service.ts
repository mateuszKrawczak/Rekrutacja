import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable()
export class ArticlesService {
apiUrl = environment.api;
constructor(private http: HttpClient ) {}


  getArticles(filterName?: string){
    return this.http.get<Article[]>(`${this.apiUrl}articles`);
  }

  getArticleDetails(id: number){
    return this.http.get<Article>(`${this.apiUrl}articles/${id}`);
  }

  getArticleLaunchDetails(id: string){
    return this.http.get<Article>(`${this.apiUrl}articles/launch/${id}`);
  }

  getArticleEventDetails(id: number){
    return this.http.get<Article>(`${this.apiUrl}articles/event/${id}`);
  }
}
