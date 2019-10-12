import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MeComponent } from '../me/me.component';
import { DreamsComponent } from '../dreams/dreams.component';
import { LikeComponent } from '../like/like.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CarouselComponent } from '../carousel/carousel.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MeComponent, DreamsComponent, LikeComponent, CarouselComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('headercomponent should create', () => {
    expect(component).toBeTruthy();
  });
});
