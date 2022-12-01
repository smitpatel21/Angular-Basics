import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
  }

  @Input() set propWithPara(object:Object) {
    console.log(object)// if we want to do any process on data
  }

}
