import { Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  readonly images = Array.from({ length: 7 }, (_, i) => `assets/${i + 1}.png`);

  hoveredImgIndexInSecondUl = signal<null | number>(null);

  secondUlMargin = computed(() => {
    const hoveredImgIndex = this.hoveredImgIndexInSecondUl();
    const margin = hoveredImgIndex ? (hoveredImgIndex + 1) * 30 : 0;
    return margin + 'px';
  })

  onMouseEnter(index: number) {
    this.hoveredImgIndexInSecondUl.set(index);
  }

  onMouseLeave() {
    this.hoveredImgIndexInSecondUl.set(null);
  }
}
