import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  type;

  constructor(
  ) {
    this.type = "likes";
   }

  ngOnInit() {
  }

}
