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
    private unsplashService: UnsplashService
  ) { }

  ngOnInit() {
    if (!!this.type) {
      this.unsplashService.getMockUnsplashPhotosByQuery(this.type).toPromise().then(response => {
        this.allPhotos = response;
      })
    }

    // Not in use as unplash API only allows 50 calls per hour
    // this.unsplashService.getUnsplashPhotosByCollection(this.type).toPromise().then(response=>{
    //   this.allPhotos = response;
    // }).catch(error=>{
    //   alert("Error in getting photos, please try again!");
    // })
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

  triggerAnimation() {
    setTimeout(() => {
      for (let i in document.getElementsByClassName('image-0')) {
        if (!!document.getElementsByClassName('image-0')[i]['offsetParent'] && !!document.getElementsByClassName('image-0')[i]['offsetParent'].classList && !document.getElementsByClassName('image-0')[i]['offsetParent'].classList.contains("page--inactive")) {
          document.getElementsByClassName('image-0')[i].classList.add("fading");
          setTimeout(() => {
            this.clearAnimation();
          }, 4000);
        }
      }
    }, 0);
  }

  clearAnimation(){
    $("img").removeClass("fading");
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    switch(event.key){
      case "ArrowRight":
          this.triggerCarousel('next', this.allPhotos, );
        break;
      case "ArrowLeft":
          this.triggerCarousel('prev', this.allPhotos);
        break;
    }
  }

}
