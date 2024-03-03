import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { CartService } from './services/cart.service';
import { provideHttpClient } from '@angular/common/http';
import { ProductsService } from './services/products.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideHttpClient(),
    CartService,
    ProductsService,
  ],
};
