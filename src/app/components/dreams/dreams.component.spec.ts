import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsComponent } from './dreams.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DreamsComponent', () => {
  let component: DreamsComponent;
  let fixture: ComponentFixture<DreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsComponent, CarouselComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dreamscomponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('type should be "dreams"', () => {
    expect(component.type).toEqual("dreams");
  });
});
