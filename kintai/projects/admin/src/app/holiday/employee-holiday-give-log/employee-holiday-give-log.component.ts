import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-holiday-give-log',
  templateUrl: './employee-holiday-give-log.component.html',
  styles: []
})
export class EmployeeHolidayGiveLogComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayGiveLogFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const EmployeeHolidayGiveLogFilterFields = [
  {
    key: 'use_term',
    type: 'radio',
    templateOptions: {
      label: '期間指定',
      required: false,
      options: [
        {
          label: 'なし',
          value: 'なし'
        },
        {
          label: 'あり',
          value: 'あり'
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
    key: 'search_holiday_type',
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
    key: 'tags',
    type: 'input',
    templateOptions: {
      label: 'タグ',
      required: false
    }
  },
  {
    key: 'sort',
    type: 'radio',
    templateOptions: {
      label: '並び順',
      required: false,
      options: [
        {
          label: '使用可能開始日順',
          value: '使用可能開始日順'
        },
        {
          label: '使用期限順',
          value: '使用期限順'
        }
      ]
    }
  }
];
