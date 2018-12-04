import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-over-work-table-show',
  templateUrl: './over-work-table-show.component.html',
  styles: []
})
export class OverWorkTableShowComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: OverWorkTableFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const OverWorkTableFilterFields = [
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
    key: 'search_type',
    type: 'filtertime',
    templateOptions: {
      label: '以下の検索条件は「指定期間」を選択した場合のみ入力できます。',
      required: false
    }
  }
];
