import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  public question: string;
  public options: string[] = [];

  constructor() { 

  }

  ngOnInit() {
    
  }
}
