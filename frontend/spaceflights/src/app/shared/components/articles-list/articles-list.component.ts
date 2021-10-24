import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Article } from '../../models/article';
import { CurrentPage } from '../../models/pagination-settings';
import { ArticlesService } from '../../services/articles.service';
import { FavouriteArticlesService } from '../../services/favourite-articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  currentPage = CurrentPage;
  articles$: Observable<Article[]>;
  filteredArticles$: Observable<Article[]>;

  filter = new FormControl('');

  constructor(private articlesService: ArticlesService) {
    this.loadArticles(this.currentPage);
    this.filteredArticles$ = this.articles$;
  }

  ngOnInit(): void {
    // miałem w plancah korzystać z filtrowania poprzez api ale na swaggerze nie działało albo nie wiedziałem jak podać parametr z częścią tytułu, więc to tylko filtruje na jednej stronie  
    this.filter.valueChanges
      .pipe(
        debounceTime(500),
        map((filteredTerm) => {
          this.filteredArticles$ = this.articles$.pipe(
            map((articles) =>
              articles.filter((a) => a.title.includes(filteredTerm))
            )
          );
        })
      )
      .subscribe();
  }

  loadArticles(pageNumber: number) {
    if (pageNumber != this.currentPage) {
      this.currentPage = pageNumber;
      this.filter.setValue('');
    }
    this.articles$ = this.articlesService.getArticles(this.currentPage);
  }
}
