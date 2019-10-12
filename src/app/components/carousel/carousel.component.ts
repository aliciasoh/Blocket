import { Component, OnInit, Input } from '@angular/core';
import { UnsplashService } from 'src/app/services/unsplash.service';
import { HostListener } from '@angular/core';
declare var $;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() type;
  allPhotos;

  constructor(
    private unsplashService: UnsplashService,
  ) { }

  ngOnInit() {
    if (!!this.type) {
      this.unsplashService.getMockUnsplashPhotosByQuery(this.type).toPromise().then(response => {
        this.allPhotos = response;
      }).catch(error=>{
        alert("Error in getting photos, please try again!");
      })
    }

    // Not in use as unplash API only allows 50 calls per hour
    // if (!!this.type) {
    //   this.unsplashService.getUnsplashPhotosByCollection(this.type).toPromise().then(response => {
    //     this.allPhotos = response;
    //   }).catch(error => {
    //     alert("Error in getting photos, please try again!");
    //   })
    // }
  }

  triggerCarousel(action, photos) {
    switch (action) {
      case "prev":
        this.clearAnimation();
        photos.unshift(photos.pop());
        this.triggerAnimation();
        break;
      case "next":
        this.clearAnimation();
        photos.push(photos.shift());
        this.triggerAnimation();
        break;
    }
  }

  toggleMenu(key) {
    switch (key) {
      case "ArrowDown":
        if (!document.querySelector("nav").classList.contains("pages-nav--open")) {
          let element: HTMLButtonElement = document.getElementsByClassName('menu-button')[0] as HTMLButtonElement;
          element.click();
        }
        break;
      case "ArrowUp":
        if (document.querySelector("nav").classList.contains("pages-nav--open")) {
          let element: HTMLButtonElement = document.getElementsByClassName('menu-button')[0] as HTMLButtonElement;
          element.click();
        }
        break;
    }
  }

  triggerAnimation() {
    setTimeout(() => {
      for (let i in document.getElementsByClassName('image-0')) {
        if (!!document.getElementsByClassName('image-0')[i]['offsetParent'] && !!document.getElementsByClassName('image-0')[i]['offsetParent'].classList && !document.getElementsByClassName('image-0')[i]['offsetParent'].classList.contains("page--inactive")) {
          document.getElementsByClassName('image-0')[i].classList.add("fading");
        }
      }
      for (let i in document.getElementsByClassName('desc-0')) {
        if (!!document.getElementsByClassName('desc-0')[i]['offsetParent'] && !!document.getElementsByClassName('desc-0')[i]['offsetParent'].classList && !document.getElementsByClassName('desc-0')[i]['offsetParent'].classList.contains("page--inactive")) {
          document.getElementsByClassName('desc-0')[i].classList.add("sliding");
        }
      }
    }, 0);
  }

  clearAnimation() {
    $("img").removeClass("fading");
    $("p").removeClass("sliding");
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    for (let i in document.getElementsByClassName('carousel')) {
      if (!!document.getElementsByClassName('carousel')[i]['offsetParent'] && !!document.getElementsByClassName('carousel')[i]['offsetParent'].classList && !document.getElementsByClassName('carousel')[i]['offsetParent'].classList.contains("page--inactive")) {
        if (document.getElementsByClassName('carousel')[i]['offsetParent'].id.split("-")[1] == this.type) {
          switch (event.key) {
            case "ArrowRight":
              this.triggerCarousel('next', this.allPhotos);
              break;
            case "ArrowLeft":
              this.triggerCarousel('prev', this.allPhotos);
              break;
            case "ArrowDown":
              this.toggleMenu(event.key);
              break;
            case "ArrowUp":
              this.toggleMenu(event.key);
              break;
          }
        }
      }
    }
  }

}
