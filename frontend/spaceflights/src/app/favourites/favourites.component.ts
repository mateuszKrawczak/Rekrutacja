import { Component } from '@angular/core';
import { FavouriteArticlesService } from '../shared/services/favourite-articles.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  articles$ = this.favouriteArticlesService.articles$;

  constructor(private favouriteArticlesService: FavouriteArticlesService) { }


}
