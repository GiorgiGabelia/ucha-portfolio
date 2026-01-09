import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-carousel',
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  readonly imagePaths = Array.from({ length: 11 }, (_, i) => `assets/carousel/${i + 1}.webp`);
  readonly imagesLoaded = signal(false);

  ngOnInit() {
    this.preloadImages()
  }

  async preloadImages(): Promise<void> {
    const imagePromises = this.imagePaths.map(path => {
      return new Promise<void>(resolve => {
        const img = new Image();
        img.src = path;

        if (img.decode) {
          img.decode().then(() => resolve()).catch(() => resolve());
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    });

    await Promise.all(imagePromises);

    this.imagesLoaded.set(true);
  }
}
