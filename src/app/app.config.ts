import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';


function preloadImagesFactory() {
  return () => {
    const imageUrls = Array.from({ length: 7 }, (_, i) => `assets/${i + 1}.webp`)

    return new Promise<void>((resolve) => {
      let loadedCount = 0;
      const total = imageUrls.length;

      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;

        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === total) {
            console.log('✅ All images preloaded');
            resolve();
          }
        };
      });
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimations(), {
      provide: APP_INITIALIZER,
      useFactory: preloadImagesFactory,
      multi: true,
    },]
};
