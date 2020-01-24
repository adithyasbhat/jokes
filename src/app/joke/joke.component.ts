import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { format } from 'date-fns'
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
  public list = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('initializing joke component');
    this.getJokeList();
    
  }

  getJokeList() {
this.apiService.getJokeList().subscribe(data =>
  this.list = data);
  }
}
