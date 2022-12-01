import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css'],
})
export class BasicformComponent implements OnInit {
  @ViewChild('basicform') form:any;
  constructor(private apiData: CommonServiceService) {}

  ngOnInit(): void {}

  getData(value: NgForm) {
    console.log(value);
    this.form.reset();
  }
  sendDataToServer(data: any) {
    this.apiData.postApiData(data).subscribe((data: any) => console.log(data));
  }
}
