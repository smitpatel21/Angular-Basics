import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css'],
})
export class IfElseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toggler: boolean = true;
  color: string = 'red';
  toggleData() {
    this.toggler = !this.toggler;
    this.color = this.color === 'red' ? 'green' : 'red';
  }
}
