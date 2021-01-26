import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { format } from 'date-fns'
import { Router } from '@angular/router';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public list = [];
  listArray: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    console.log('initializing joke component');
    this.getJokeList();

  }

  getJokeList() {
    this.apiService.getJokeList().subscribe(data => {
      this.list = data['jokes']
      console.log(this.list);
  });
}
randomJoke() {
  this.router.navigate(['jokes/random']);
  
}

jokeDetail() {
// alert('in joke Details()');
this.apiService.getJokeList().subscribe(data => {
  this.listArray = data['jokes'];
  // console.log(this.listArray);
var rand = this.list[Math.floor(Math.random() * this.listArray.length)];
alert(this.listArray);
});
    this.router.navigate(['jokes/random']);
}
}