import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-down-attendance',
  templateUrl: './down-attendance.component.html',
  styles: []
})
export class DownAttendanceComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: DownAttendanceFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const DownAttendanceFilterFields = [
  {
    key: 'setting_id',
    type: 'format',
    templateOptions: {
      label: '出力フォーマット',
      required: false
    }
  },
  {
    key: 'sameasdisplay',
    type: 'radio',
    templateOptions: {
      label: '集計方式',
      required: false,
      options: [
        {
          label: '総計で出力',
          value: '総計で出力'
        },
        {
          label: '打刻場所ごとに出力',
          value: '打刻場所ごとに出力'
        }
      ]
    }
  },
  {
    key: 'pdf',
    type: 'radio',
    templateOptions: {
      label: 'ファイル形式',
      required: false,
      options: [
        {
          label: 'Excel',
          value: 'Excel'
        },
        {
          label: 'PDF',
          value: 'PDF'
        }
      ]
    }
  },
  {
    key: 'number_of_afile_radio',
    type: 'radio',
    templateOptions: {
      label: '1ファイルの出勤簿シート数',
      required: false,
      options: [
        {
          label: '1名分(1シート)(推奨)',
          value: '1名分(1シート)(推奨)'
        },
        {
          label: '複数名分(複数シート)',
          value: '複数名分(複数シート)'
        }
      ]
    }
  },
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
    key: 'retirement',
    type: 'select',
    templateOptions: {
      label: '在職・退職',
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
