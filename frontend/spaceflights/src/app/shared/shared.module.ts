import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleShortDetailsComponent } from './components/articles-list/article-short-details/article-short-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesService } from './services/articles.service';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [ArticleDetailsComponent, ArticlesListComponent, ArticleShortDetailsComponent],
  providers:[ArticlesService],
  exports:[ArticlesListComponent, IonicModule, FlexLayoutModule]
})
export class SharedModule { }
