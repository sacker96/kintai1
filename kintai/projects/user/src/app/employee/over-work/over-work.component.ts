import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-over-work',
  templateUrl: './over-work.component.html',
  styles: []
})
export class OverWorkComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: OverWorkFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const OverWorkFilterFields = [
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定月指定期間',
      required: false
    }
  }
];
