import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

interface appDataForm {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-data-manipulate',
  templateUrl: './data-manipulate.component.html',
  styleUrls: ['./data-manipulate.component.css'],
})
export class DataManipulateComponent implements OnInit {
  appData: any = [];
  isEdit = false;
  dataToEdit: appDataForm = {};
  dataToUpdateId: string = '';

  @ViewChild('appForm') appForm: any;
  @Input() props: string = '';

  ngOnInit(): void {this.getAppData();}

  constructor(private apiData: CommonServiceService) {

  }

  getAppData() {
    this.apiData.getApiData().subscribe((data: any) => (this.appData = data));
  }

  addData(data: appDataForm) {
    if (this.isEdit) {
      this.apiData
        .updateData(this.dataToUpdateId, data)
        .subscribe((res) => this.getAppData());
      this.isEdit = false;
    } else {
      this.apiData.addData(data).subscribe((res) => this.getAppData());
    }
    this.appForm.reset();
  }

  editItem(id: string) {
    this.dataToUpdateId = id;
    this.isEdit = true;
    this.dataToEdit = this.appData.find((data: appDataForm) => {
      return data.id == id;
    });
    this.appForm.setValue({
      name: this.dataToEdit.name,
      email: this.dataToEdit.email,
      password: this.dataToEdit.password,
    });
  }

  deleteItem(id: string) {
    this.apiData.removeData(id).subscribe((res) => this.getAppData());
  }
}
