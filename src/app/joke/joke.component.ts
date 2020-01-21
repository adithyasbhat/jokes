import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { format } from 'date-fns'
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    console.log('initializing joke component');
    
  }
}
