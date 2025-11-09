import {  ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

function preloadImagesFactory() {
  return async () => {
    const imageUrls = Array.from({ length: 7 }, (_, i) => `assets/${i + 1}.webp`)

    await Promise.all(imageUrls.map(url =>
      fetch(url, { cache: 'force-cache' })
    ));

    console.log('✅ All images fetched and cached');
  }}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimations()]
};
