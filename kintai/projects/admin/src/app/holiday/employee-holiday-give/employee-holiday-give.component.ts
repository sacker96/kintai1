import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-holiday-give',
  templateUrl: './employee-holiday-give.component.html',
  styles: []
})
export class EmployeeHolidayGiveComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayGiveFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const EmployeeHolidayGiveFilterFields = [
  {
    key: 'holidayType',
    type: 'select',
    templateOptions: {
      label: '休暇タイプ',
      placeholder: '休暇タイプ',
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
    key: 'request_display',
    type: 'select',
    templateOptions: {
      label: '予定分を含めた残日数を表示',
      placeholder: '予定分を含めた残日数を表示',
      required: false,
      options: [
        {
          label: 'する',
          value: 'する'
        },
        {
          label: 'しない',
          value: 'しない'
        }
      ]
    }
  },
  {
    key: 'name',
    type: 'staff',
    templateOptions: {
      label: 'スタッフ名',
      required: false
    }
  },
  {
    key: 'tags',
    type: 'input',
    templateOptions: {
      label: 'タグ',
      required: false
    }
  }
];
