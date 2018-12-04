import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-over-work-applied-detail',
  templateUrl: './employee-over-work-applied-detail.component.html',
  styles: []
})
export class EmployeeOverWorkAppliedDetailComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeOverWorkAppliedDetailModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EmployeeOverWorkAppliedDetailModelFields = [
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
