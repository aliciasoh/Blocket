import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './components/me/me.component';
import { LikeComponent } from './components/like/like.component';
import { DreamsComponent } from './components/dreams/dreams.component';


const routes: Routes = [
  { path: "", component: MeComponent },
  { path: "like", component: LikeComponent },
  { path: "dreams", component: DreamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
