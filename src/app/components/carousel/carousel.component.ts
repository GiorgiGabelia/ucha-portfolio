import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  readonly imagePaths = Array.from({ length: 7 }, (_, i) => `assets/${i + 1}.webp`);
  readonly images: HTMLImageElement[]  = [];
  readonly imagesLoaded = signal(false);

  ngOnInit() {
    this.pload(this.imagePaths);
  }

  pload(args: string[]): void {
    for (var i = 0; i < args.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }

    this.imagesLoaded.set(true);
  }
}
