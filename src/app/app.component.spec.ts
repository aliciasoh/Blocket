import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { MeComponent } from './components/me/me.component';
import { LikeComponent } from './components/like/like.component';
import { DreamsComponent } from './components/dreams/dreams.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MeComponent,
        LikeComponent,
        DreamsComponent,
        CarouselComponent
      ],
      providers: [ HttpClient, HttpHandler ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blocket'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('blocket');
  });
});
