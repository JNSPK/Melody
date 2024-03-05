import { CommonModule, JsonPipe } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { routeAnimationState } from '../shared/route-animation';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  animations: [routeAnimationState],
})
export class CartComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  service = inject(CartService);
  productService = inject(ProductsService);
  melody = this.productService.getById(1);
  cart = this.service.cart();

  getTotalPrice(): number {
    return this.service.totalPrice();
  }
  getSelectedProductInfos() {
    return this.service.getInfos();
  }
  removeItem() {
    const melody = this.melody();
    if (!melody) {
      return console.error('error');
    } else if (this.service.count() >= 1) this.service.removeProduct(melody);
  }
  addItem() {
    const melody = this.melody();
    if (!melody) {
      return console.error('error');
    }
    this.service.addProduct(melody);
  }
  purchase() {
    this.service.clearCart();
    alert(`Item purchased !\nThank you !`);
  }
}
