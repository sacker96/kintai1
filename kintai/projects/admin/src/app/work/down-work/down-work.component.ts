import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-down-work',
  templateUrl: './down-work.component.html',
  styles: []
})
export class DownWorkComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: DownWorkFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const DownWorkFilterFields = [
  {
    key: 'format',
    type: 'format',
    templateOptions: {
      label: 'フォーマット設定',
      required: false
    }
  },
  {
    key: 'output_ext',
    type: 'radio',
    templateOptions: {
      label: 'ファイル形式',
      required: false,
      options: [
        {
          label: 'CSV',
          value: 'CSV'
        },
        {
          label: 'Excel',
          value: 'Excel'
        }
      ]
    }
  },
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定期間',
      required: false,
      day: true,
      year: true
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
    key: 'retirement',
    type: 'select',
    templateOptions: {
      label: '在職・退職',
      placeholder: '在職・退職',
      required: false,
      options: [
        {
          label: '在職',
          value: '在職'
        },
        {
          label: '退職',
          value: '退職'
        }
      ]
    }
  }
];
