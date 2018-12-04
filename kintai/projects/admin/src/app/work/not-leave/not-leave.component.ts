import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-not-leave',
  templateUrl: './not-leave.component.html',
  styles: []
})
export class NotLeaveComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: NotLeaveFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const NotLeaveFilterFields = [
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定月指定期間',
      required: false
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
  },
  {
    key: 'error_type',
    type: 'select',
    templateOptions: {
      label: '検索タイプ',
      placeholder: '検索タイプ',
      required: false,
      options: [
        {
          label: '打刻漏れ・打刻間違い',
          value: '打刻漏れ・打刻間違い'
        },
        {
          label: '打刻エラー',
          value: '打刻エラー'
        },
        {
          label: '両方',
          value: '両方'
        }
      ]
    }
  }
];
