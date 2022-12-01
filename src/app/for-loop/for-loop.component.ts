import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css'],
})
export class ForLoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cardData = [
    { name: 'Smit', age: 1 },
    { name: 'Amit', age: 2 },
    { name: 'Mit', age: 3 },
    { name: 'It', age: 4 },
    { name: 'It', age: 4 },
    { name: 'It', age: 4 },
    { name: 'It', age: 4 },
    { name: 'It', age: 4 },
  ];
}
