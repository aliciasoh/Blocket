import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CarouselComponent]
})
export class HeaderComponent implements OnInit {

  constructor(
    private carouselComponent: CarouselComponent
  ) { }

  ngOnInit() {
  }

  toggleMenu(action){
    this.carouselComponent.toggleMenu(action);
  }
}
