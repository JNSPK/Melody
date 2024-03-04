import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../shared/Product.interface';

interface Cart {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Cart[]>([]);

  addProduct(product: Product) {
    const currentCart = this.cart();
    const existingProduct = currentCart.find(
      (cart) => cart.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
      this.cart.update((currentCart) => [...currentCart]);
    } else {
      this.cart.update((value) => [
        ...value,
        { product: product, quantity: 1 },
      ]);
    }
  }

  removeProduct(product: Product) {
    const currentCart = this.cart();
    const existingProduct = currentCart.find(
      (cart) => cart.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity -= 1;
      this.cart.update((currentCart) => [...currentCart]);
    }
    return;
  }
  infos = computed(() => {
    return this.cart().map((infos) => infos);
  });
  count = computed(() => {
    return this.cart().reduce((acc, cart) => acc + cart.quantity, 0);
  });

  totalPrice(): number {
    return this.cart().reduce(
      (total, cart) => total + cart.product.price * cart.quantity,
      0
    );
  }
  getInfos() {
    return this.cart().map((infos) => infos);
  }
}
