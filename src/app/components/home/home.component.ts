import { Component, OnInit } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Initialize all carousels
    const carouselElement = document.querySelector('#carouselExampleDark')
    if (carouselElement) {
      const carousel = new Carousel(carouselElement);
    }
  }
}