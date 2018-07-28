import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poll-option',
  templateUrl: './poll-option.component.html',
  styleUrls: ['./poll-option.component.css']
})
export class PollOptionComponent implements OnInit {
  private _option: number;

  @Input()
  public set option(value: number) {
    this._option = value;
    this.optionChange.emit(this._option);
  }

  public get option(): number {
    return this._option;
  }

  @Output()
  public optionChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
