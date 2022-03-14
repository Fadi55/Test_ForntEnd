import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {
  @Input() receiveDataCheked=0
  count =0
  constructor() { }

  ngOnInit()  {
    this.count=this.receiveDataCheked
  }

}
