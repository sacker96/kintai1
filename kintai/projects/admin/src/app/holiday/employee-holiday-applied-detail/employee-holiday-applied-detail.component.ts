import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-holiday-applied-detail',
  templateUrl: './employee-holiday-applied-detail.component.html',
  styles: []
})
export class EmployeeHolidayAppliedDetailComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayAppliedDetailModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EmployeeHolidayAppliedDetailModelFields = [
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
