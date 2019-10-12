import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeComponent } from './me.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MeComponent', () => {
  let component: MeComponent;
  let fixture: ComponentFixture<MeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeComponent, CarouselComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('mecomponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('type should be "me"', () => {
    expect(component.type).toEqual("me");
  });
});
