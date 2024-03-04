import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { routeAnimationState } from '../shared/route-animation';

@Component({
  selector: 'section[product-images]',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './product-img.component.html',
  styleUrl: './product-img.component.scss',
  animations: [routeAnimationState],
})
export class ProductImgComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @Input('title')
  title: string = '';

  slides: any[] = [
    {
      url: './assets/img/reality.jpg',
    },
    {
      url: './assets/img/up.jpg',
    },
    {
      url: './assets/img/face2.jpg',
    },
    {
      url: './assets/img/connect.jpg',
    },
    {
      url: './assets/img/details.jpg',
    },
  ];
}
