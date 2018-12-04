import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holidayworking-new',
  templateUrl: './holidayworking-new.component.html',
  styles: []
})
export class HolidayworkingNewComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: HolidayworkingModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const HolidayworkingModelFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '休日出勤日',
      required: true
    }
  },
  {
    key: 'holiday_type',
    type: 'select',
    templateOptions: {
      label: '取得予定の休暇タイプ',
      required: false,
      options: [
        {
          label: '(休日出勤申請のみ)',
          value: '(休日出勤申請のみ)'
        },
        {
          label: '代休',
          value: '代休'
        },
        {
          label: '振休',
          value: '振休'
        }
      ]
    }
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      label: '出勤理由',
      required: false,
      rows: '3'
    }
  }
];
