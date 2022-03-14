import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  @Input() receiveDatas: any
  @Input() receiveDataSearch: any
  @Input() receiveRowStatus
  @Output() sendDatachecked: EventEmitter<any> = new EventEmitter();
  @Output() sendPageData: EventEmitter<any> = new EventEmitter();


  count = 0
  heroes1
  heroes11
  page = 1;
  heroes = [
    {
      checked: false, full_name: 'aziz lassoued', Phone: '(621) 321-2232'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 3, CDLexp: '1.565', MEDexp: '565', MVRexp: '65'
      , File: 'ok'

    },
    {
      checked: false, full_name: 'iheb azzabi', Phone: '21867186'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 3, CDLexp: '1.565', MEDexp: '565', MVRexp: '65'
      , File: 'ok'

    },
    {
      checked: false, full_name: 'ihebs lassoued', Phone: '21500400'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 3, CDLexp: '1.565', MEDexp: '565', MVRexp: '65'
      , File: 'ok'

    }


  ];

  constructor() { }
  ngOnChanges() {


    if (this.receiveDatas.length != 0) {
      this.heroes1.push(this.receiveDatas)


      this.receiveDatas.length = []
    }
    if (this.receiveRowStatus == 1) {

      var filled: any
      filled = Array.apply(null, Array(1000)).map(function () {
        return {
          checked: false, full_name: 'aziz lassoued', Phone: '(621) 321-2232'
          , ssn: 55555, dob: '12/04/1111',
          hired: '03/24/17', CDL: 587662410, state: 1, CDLexp: '1.565', MEDexp: '565', MVRexp: '65'
          , File: 'ok'

        }
      });


      Array.prototype.push.apply(this.heroes, filled)


    }

    if (this.receiveDataSearch != "") {

      this.heroes = this.heroes1.filter(o => o.full_name.includes(this.receiveDataSearch))

    }
    if (this.receiveDataSearch.trim().length === 0) {
      this.heroes = this.heroes1
    }



  }
  ngOnInit() {
    this.heroes11 = this.heroes
    this.heroes1 = this.heroes
    this.ngOnChanges()


  }


  deleteRow(x) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.heroes.splice(x, 1);
    }
  }

  changed() {
    this.count = 0;
    this.heroes.forEach(item => {
      if (item['checked']) {
        this.count = this.count + 1;


      }
      this.sendDatachecked.emit(this.count)
    })
  }
}
