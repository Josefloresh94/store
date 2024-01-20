import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private protectService = inject(ProductService);

  ngOnInit(){
    if(this.id){
      this.protectService.getOne(this.id)
        .subscribe({
          next: (product) => {
            this.product.set(product);
            if(product.images.length > 0){
              this.cover.set(product.images[0]);
            }
          }
        })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }
}
