import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ArticleDetailsComponent } from './shared/components/article-details/article-details.component';
const routes: Routes = [
  {
    path: 'articles',
   component:ArticlesComponent
  },
  {
    path: 'articles/:id',
    component:ArticleDetailsComponent
  },
  {
    path: 'favourites',
    component:FavouritesComponent
  },
  {
    path: '',
    redirectTo:'articles',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
