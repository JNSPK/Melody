import { trigger, style, animate, transition } from '@angular/animations';

export const routeAnimationState = trigger('routeAnimationTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(500),
  ]),
  transition(':leave', [
    animate(
      100,
      style({
        width: 0,
        opacity: 0,
      })
    ),
  ]),
]);
