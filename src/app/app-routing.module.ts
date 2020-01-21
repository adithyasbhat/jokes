import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeComponent } from './joke/joke.component';


const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full'},
  { path: 'jokes', component: JokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
