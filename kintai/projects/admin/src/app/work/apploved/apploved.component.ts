import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apploved',
  templateUrl: './apploved.component.html',
  styles: []
})
export class ApplovedComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ApprovedFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const ApprovedFilterFields = [
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
  }
];
