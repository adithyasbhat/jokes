import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {
  list: any;
  listArray: any;
  content: any;
  createdAt: any;
  name: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRandomJoke();
  }
  getRandomJoke() {
    this.apiService.getJokeList().subscribe(data => {
      this.list = data['jokes'];
      this.listArray = this.list[Math.floor(Math.random() * this.list.length)];
      this.content = this.listArray.content;
      this.createdAt = this.listArray.createdAt;
      this.name = this.listArray.name;
  });
  // var listArray = this.list[Math.floor(Math.random() * this.list.length)];
  // console.log(listArray);
  }
}
