import { Component, inject, signal } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLinkWithHref, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
