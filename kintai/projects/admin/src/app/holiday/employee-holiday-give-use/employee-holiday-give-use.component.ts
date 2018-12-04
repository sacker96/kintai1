import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-holiday-give-use',
  templateUrl: './employee-holiday-give-use.component.html',
  styles: []
})
export class EmployeeHolidayGiveUseComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayGiveUseModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EmployeeHolidayGiveUseModelFields = [
  {
    key: 'name',
    type: 'staff',
    templateOptions: {
      label: 'スタッフ',
      required: false
    }
  },
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '休暇日',
      required: false
    }
  },
  {
    key: 'holiday_id',
    type: 'select',
    templateOptions: {
      label: '休暇名',
      placeholder: '休暇名',
      required: false,
      options: [
        {
          label: '',
          value: ''
        }
      ]
    }
  },
  {
    key: 'range',
    type: 'static',
    templateOptions: {
      label: '休暇範囲',
      required: false
    }
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      label: '休暇理由',
      required: false,
      rows: '2'
    }
  }
];
