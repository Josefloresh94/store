import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // @Input({ required: true }) product!: Product;
  // @Output() addToCart = new EventEmitter();
  readonly product = input.required<Product>();
  readonly addToCart = output<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }
}
