import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  article!: Article;

  constructor(private route: ActivatedRoute,private router: Router, private articlesService: ArticlesService) {
    this.route.params.pipe(switchMap(param => {
      const id = Number(param.id);
      if(Number.isNaN(id)) {
        this.navigateToList();
        return of<void>();
    }
    else{
       return this.articlesService.getArticleDetails(id);
      }
    })).subscribe(article=>{
      if(article) {this.article = article;}
    },()=>{
      this.navigateToList();
    });
   }

  navigateToList(){
    this.router.navigate(['/articles']);
  }
}
