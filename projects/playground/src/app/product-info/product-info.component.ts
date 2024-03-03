import { Component, HostBinding, Input, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { routeAnimationState } from '../shared/route-animation';

@Component({
  selector: 'section[product-infos]',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  animations: [routeAnimationState],
})
export class ProductInfoComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @Input('title')
  title: string = '';

  @Input('description')
  description: string = '';

  @Input('price')
  price: string = '';
  service = inject(CartService);
  productService = inject(ProductsService);
  melody = this.productService.getById(1);

  addToCart() {
    const melody = this.melody();
    if (!melody) {
      return console.error('error');
    }
    this.service.addProduct(melody);
  }
}
