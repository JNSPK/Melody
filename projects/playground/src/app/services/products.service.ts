import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Product } from '../shared/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  getById(id: number) {
    return toSignal(
      this.http
        .get<Product[]>('/assets/data/mocked-product.json')
        .pipe(map((products) => products.find((product) => product.id === id)))
    );
  }
}
