import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adit-manage-detail',
  templateUrl: './adit-manage-detail.component.html',
  styles: []
})
export class AditManageDetailComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ApplovedDetailFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const ApplovedDetailFilterFields = [
  {
    key: 'change_type',
    type: 'select',
    templateOptions: {
      label: '打刻区分',
      required: false,
      options: [
        {
          label: '(自動判別)',
          value: '(自動判別)'
        },
        {
          label: '出勤',
          value: '出勤'
        },
        {
          label: '休憩開始',
          value: '休憩開始'
        },
        {
          label: '休憩終了',
          value: '休憩終了'
        },
        {
          label: '退勤',
          value: '退勤'
        }
      ]
    }
  }
];

const AditModelFields = [
  {
    key: 'type',
    type: 'static',
    templateOptions: {
      label: '打刻区分',
      required: false
    }
  },
  {
    key: 'time',
    type: 'input',
    templateOptions: {
      label: '時刻',
      required: false
    }
  },
  {
    key: 'notice',
    type: 'textarea',
    templateOptions: {
      label: '備考',
      required: false,
      rows: '2'
    }
  }
];
