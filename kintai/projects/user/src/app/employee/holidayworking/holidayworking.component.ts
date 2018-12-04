import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holidayworking',
  templateUrl: './holidayworking.component.html',
  styles: []
})
export class HolidayworkingComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: HolidayworkingFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const HolidayworkingFilterFields = [
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定月指定期間',
      required: false
    }
  }
];
