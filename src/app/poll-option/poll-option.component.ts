import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poll-option',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.css']
})
export class PollOptionComponent implements OnInit {
  private _option: string;

  @Input()
  public set option(value: string) {
    this._option = value;
    this.optionChange.emit(this._option);
  }

  public get option(): string {
    return this._option;
  }

  @Output()
  public optionChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
