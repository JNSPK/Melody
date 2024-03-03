import { Component } from '@angular/core';
import { ProductImgComponent } from '../product-img/product-img.component';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductImgComponent, ProductInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
