import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-landing',
  imports: [CarouselComponent, HeaderComponent, AboutMeComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
