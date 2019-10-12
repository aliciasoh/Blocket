import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('carouselcomponent should create', () => {
    expect(component).toBeTruthy();
  });
});
