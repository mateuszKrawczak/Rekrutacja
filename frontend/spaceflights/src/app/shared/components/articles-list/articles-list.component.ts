import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { ArticlesService } from '../../services/articles.service';
import { FavouriteArticlesService } from '../../services/favourite-articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$ = this.articlesService.getArticles();
  filteredArticles$ = this.articles$;

  filter = new FormControl('');

  constructor(private articlesService: ArticlesService, private favouriteArticlesService: FavouriteArticlesService) { }

  ngOnInit(): void {
     this.filter.valueChanges.pipe(debounceTime(500),map(filteredTerm=>{
       this.filteredArticles$ = this.articles$.pipe(map(articles=>articles.filter(a=>a.title.includes(filteredTerm))));
     })).subscribe();
  }

}
