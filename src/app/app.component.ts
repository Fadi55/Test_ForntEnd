import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rowstatus

  pages;
  datas = [];
  dataSearchs = " "
  isFormSent = true;
  dataCheckeds
  title = 'FrontEnd-Test';
  posts = [];


  ngOnInit() {

  }

  DataRowStatus(x) {
    this.rowstatus = x
  }
  ReceiveDataPage(x) {
    this.pages = x
  }
  DataCheckedrecieve(x) {
    this.dataCheckeds = x
  }
  Datarecieve(datas: any) {
    this.datas = datas
  }

  onFormSent() {
    this.isFormSent = true;

  }


  DataSearchrecieve(dataSerach) {
    this.dataSearchs = dataSerach

  }

}

