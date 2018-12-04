import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'specdate',
  templateUrl: 'specdate.component.html',
  styles: []
})
export class SpecdateComponent extends FieldType implements OnInit {
  localform: FormGroup;
  list = {
    year: Array.from(Array(10), (v, k) => '' + (2018 - 8 + k)),
    month: Array.from(Array(12), (v, k) => '' + (1 + k)),
    day: Array.from(Array(31), (v, k) => '' + (1 + k))
  };

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    const now = moment();
    this.localform = this.fb.group({
      range: ['range1'],
      range1year: [now.format('Y')],
      range1month: [now.format('M')],
      range2start: [now.format('Y/M/D')],
      range2end: [now.format('Y/M/D')],
      range3: [now.format('Y/M/D')],
      range4year: [now.format('Y')]
    });
    this.localform.valueChanges.subscribe(values => this.setFormControl());
    this.setFormControl();
  }

  setFormControl() {
    let value = '';
    if (this.localform.controls['range'].value === 'range1') {
      value += this.localform.controls['range1year'].value;
      value += '/';
      value += this.localform.controls['range1month'].value;
    } else if (this.localform.controls['range'].value === 'range2') {
      value += this.localform.controls['range2start'].value;
      value += '-';
      value += this.localform.controls['range2end'].value;
    } else if (this.localform.controls['range'].value === 'range3') {
      value += this.localform.controls['range3'].value;
    } else if (this.localform.controls['range'].value === 'range4') {
      value += this.localform.controls['range4year'].value;
    }
    this.formControl.setValue(value);
  }

  addMonth(param: number) {
    let newYear = +this.localform.controls['range1year'].value;
    let newMonth = +this.localform.controls['range1month'].value + param;
    if (newMonth == 0) {
      newMonth = 12;
      newYear -= 1;
    } else if (newMonth == 13) {
      newMonth = 1;
      newYear += 1;
    }
    if (this.list.year.find(val => val == String(newYear)) === undefined) {
      this.list.year.push(String(newYear));
      this.list.year.sort();
    }
    this.localform.controls['range1year'].setValue(String(newYear));
    this.localform.controls['range1month'].setValue(String(newMonth));
  }

  addYear(param: number) {
    let newYear = +this.localform.controls['range4year'].value;
    newYear += param;
    if (this.list.year.find(val => val == String(newYear)) === undefined) {
      this.list.year.push(String(newYear));
      this.list.year.sort();
    }
    this.localform.controls['range4year'].setValue(String(newYear));
  }
}
