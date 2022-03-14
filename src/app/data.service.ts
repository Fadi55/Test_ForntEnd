import { Injectable } from '@angular/core';
 
import {of} from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}
  heroes = [
    {
      checked: false, full_name: 'aziz lassoued', Phone: '(621) 321-2232'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 'ok', cdlexp: 'in 1.565 days', medicalesp: 'in 565 days', mvrexp: 'in 65 days'
      , File: 'ok'

    },
    {
      checked: false, full_name: 'iheb azzabi', Phone: '21867186'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 'ok', cdlexp: 'in 1.565 days', medicalesp: 'in 565 days', mvrexp: 'in 65 days'
      , File: 'ok'

    },
    {
      checked: false, full_name: 'ihebs lassoued', Phone: '21500400'
      , ssn: 55555, dob: '12/04/1111',
      hired: '03/24/17', CDL: 587662410, state: 'ok', cdlexp: 'in 1.565 days', medicalesp: 'in 565 days', mvrexp: 'in 65 days'
      , File: 'ok'

    }


  ];
}