import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PaginationTableComponent implements OnInit {
  @Input() receiveDataArray
  @Output() sendRowStatus: EventEmitter<any> = new EventEmitter();

  page = 1;

  constructor(private premiumDataService: DataService) { }
  row = 0
  ngOnInit(): void {

  }


  AddRow() {
    this.row = 1

    this.sendRowStatus.emit(this.row)

  }


}
