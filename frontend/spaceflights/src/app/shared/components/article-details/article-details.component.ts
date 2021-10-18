import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';
@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  articleSource = new BehaviorSubject<Article | null>(null);
  article$ = this.articleSource.asObservable();

  segmentsArray$: Observable<Article[]>;
  events$ = this.article$.pipe(
    shareReplay (),
    map(value=>value.events),
    switchMap(eventsIds=>forkJoin(eventsIds.map(event=>this.articlesService.getArticleEventDetails(event.id)))));

  launches$ = this.article$.pipe(
    shareReplay (),
   map(value=>value.launches),
   switchMap(launchesIds=>forkJoin(launchesIds.map(launch=>this.articlesService.getArticleLaunchDetails(launch.id)))));


  constructor(private route: ActivatedRoute,private router: Router, private articlesService: ArticlesService) {
   }

   ngOnInit(): void {
    this.route.params.pipe(switchMap(param => {
      const id = Number(param.id);
      if(Number.isNaN(id)) {
        this.navigateToList();
        return of<void>();
    }
    else{
       return this.articlesService.getArticleDetails(id);
      }
    })).subscribe((article: Article)=>{
      if(article) {this.articleSource.next(article);}
    },()=>{
      this.navigateToList();
    });
   }

  navigateToList(){
    this.router.navigate(['/articles']);
  }
}
