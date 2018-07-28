import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/poll';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  public question: string;
  public options: string[] = [];

  public get optionsRange(): number[] {
    return Array.from(Array(this.options.length).keys());
  }

  constructor() { 

  }

  ngOnInit() {

  }

  public addOption(): void {
    this.options.push("");//`Option ${this.options.length}`);
  }

  public deleteOption(option: number): void {
    this.options.splice(option, 1);
  }

  public createPoll(): Poll {
    let poll: Poll = {
      question: this.question,
      options: this.options
    };
    console.log(poll);
    return poll;
  }
}
