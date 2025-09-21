import { Component } from '@angular/core';
import { BookBtnComponent } from '../book-btn/book-btn.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-header',
  imports: [BookBtnComponent, AboutMeComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent { }
