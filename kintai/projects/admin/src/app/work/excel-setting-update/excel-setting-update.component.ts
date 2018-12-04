import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-excel-setting-update',
  templateUrl: './excel-setting-update.component.html',
  styles: []
})
export class ExcelSettingUpdateComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ExcelSettingModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const ExcelSettingModelFields = [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '設定名',
      required: false
    }
  },
  {
    key: 'time_format',
    type: 'radio',
    templateOptions: {
      label: '時間の表示形式',
      required: false,
      options: [
        {
          label: '10進数(1時間30分を1.50と表記)',
          value: '10進数(1時間30分を1.50と表記)'
        },
        {
          label: '時刻形式(1時間30分を1:30と表記)',
          value: '時刻形式(1時間30分を1:30と表記)'
        },
        {
          label: '分形式(1時間30分を90と表記)',
          value: '分形式(1時間30分を90と表記)'
        }
      ]
    }
  },
  {
    key: 'zero2space',
    type: 'radio',
    templateOptions: {
      label: '表示方式',
      required: false,
      options: [
        {
          label: '数値で出力 (0:00 or 0.00等)',
          value: '数値で出力 (0:00 or 0.00等)'
        },
        {
          label: '空白で出力',
          value: '空白で出力'
        }
      ]
    }
  },
  {
    key: 'format1',
    type: 'select',
    templateOptions: {
      label: 'フォーマット1',
      required: false,
      options: [
        {
          label: '打刻場所',
          value: '打刻場所'
        },
        {
          label: 'エラー',
          value: 'エラー'
        },
        {
          label: '申請コメント',
          value: '申請コメント'
        }
      ]
    }
  },
  {
    key: 'format2',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット2',
      required: false
    }
  },
  {
    key: 'format3',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット3',
      required: false
    }
  },
  {
    key: 'format4',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット4',
      required: false
    }
  },
  {
    key: 'format5',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット5',
      required: false
    }
  },
  {
    key: 'format6',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット6',
      required: false
    }
  },
  {
    key: 'format7',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット7',
      required: false
    }
  },
  {
    key: 'format8',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット8',
      required: false
    }
  },
  {
    key: 'format9',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット9',
      required: false
    }
  },
  {
    key: 'format10',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット10',
      required: false
    }
  },
  {
    key: 'format11',
    type: 'formatselect',
    templateOptions: {
      label: 'フォーマット11',
      required: false
    }
  }
];
