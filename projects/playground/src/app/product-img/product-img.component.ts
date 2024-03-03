import { Component, HostBinding, Input } from '@angular/core';
import { routeAnimationState } from '../shared/route-animation';

@Component({
  selector: 'section[product-images]',
  standalone: true,
  imports: [],
  templateUrl: './product-img.component.html',
  styleUrl: './product-img.component.scss',
  animations: [routeAnimationState],
})
export class ProductImgComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @Input('title')
  title: string = '';
}
