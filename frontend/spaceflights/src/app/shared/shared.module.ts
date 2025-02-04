import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleShortDetailsComponent } from './components/article-short-details/article-short-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ArticlesService } from './services/articles.service';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [ArticleDetailsComponent, ArticlesListComponent, ArticleShortDetailsComponent,PaginationComponent],
  providers:[ArticlesService],
  exports:[ArticlesListComponent, ArticleShortDetailsComponent,FlexLayoutModule]
})
export class SharedModule { }
