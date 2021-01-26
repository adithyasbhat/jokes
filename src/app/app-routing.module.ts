import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeComponent } from './joke/joke.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'jokes',
    pathMatch: 'full'
  },
  {
    path: 'jokes',
    component: JokeComponent
  },
  {
    path: 'jokes/random',
    component: RandomJokeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
