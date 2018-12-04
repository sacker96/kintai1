import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-holidayworking-applied-detail',
  templateUrl: './employee-holidayworking-applied-detail.component.html',
  styles: []
})
export class EmployeeHolidayworkingAppliedDetailComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayworkingAppliedDetailModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EmployeeHolidayworkingAppliedDetailModelFields = [
  {
    key: 'comment',
    type: 'textarea',
    templateOptions: {
      label: 'コメント',
      required: false,
      rows: '2'
    }
  }
];
