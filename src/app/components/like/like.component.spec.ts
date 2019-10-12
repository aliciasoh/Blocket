import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeComponent, CarouselComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('likecomponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('type should be "like"', () => {
    expect(component.type).toEqual("like");
  });
});
