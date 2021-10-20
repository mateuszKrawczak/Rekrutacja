import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private menuController: MenuController) { }

  openMenu(){
    this.menuController.open('main');
  }

  closeMenu(){
    this.menuController.close('main');
  }
}
