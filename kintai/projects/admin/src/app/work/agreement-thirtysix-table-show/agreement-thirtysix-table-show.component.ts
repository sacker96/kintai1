import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agreement-thirtysix-table-show',
  templateUrl: './agreement-thirtysix-table-show.component.html',
  styles: []
})
export class AgreementThirtysixTableShowComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AgreementThirtysixTableFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const AgreementThirtysixTableFilterFields = [
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
    key: 'number_par_page',
    type: 'select',
    templateOptions: {
      label: '表示数',
      placeholder: '表示数',
      required: false,
      options: [
        {
          label: '50',
          value: '50'
        },
        {
          label: '100',
          value: '100'
        },
        {
          label: '200',
          value: '200'
        }
      ]
    }
  }
];
