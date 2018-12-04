import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styles: []
})
export class HolidayComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: HolidayFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const HolidayFilterFields = [
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定月指定期間',
      required: false
    }
  }
];
