import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-short-rest',
  templateUrl: './short-rest.component.html',
  styles: []
})
export class ShortRestComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ShortRestFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const ShortRestFilterFields = [
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
    key: 'restType',
    type: 'filterrest',
    templateOptions: {
      label: '休憩不足',
      required: false
    }
  }
];
