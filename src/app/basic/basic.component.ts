import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  @ViewChild('appForm') appForm: any;
  @Input() props: string = '';

  color: string = 'while';
  isLoading: boolean = false;
  animeData: any = [];
  subscription: any;

  ngOnInit(): void {
    this.getAnimeData();
  }

  constructor(private commonService: CommonServiceService) {}

  getAnimeData() {
    this.isLoading = true;
    this.subscription = this.commonService
      .getAnimeData()
      .subscribe((res: any) => {
        this.isLoading = false;
        this.animeData = res.data;
      });
  }

  onInputChange(data: any) {
    this.color = data;
  }
}
