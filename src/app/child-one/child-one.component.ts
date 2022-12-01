import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  throwDataBackToParent: EventEmitter<string> = new EventEmitter<string>();

  childFunctionRun(data: any) {
    this.throwDataBackToParent.emit(data.target.value)
  }
}
