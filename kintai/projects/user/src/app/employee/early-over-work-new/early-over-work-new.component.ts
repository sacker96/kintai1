import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-early-over-work-new',
  templateUrl: './early-over-work-new.component.html',
  styles: []
})
export class EarlyOverWorkNewComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EarlyOverWorkModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EarlyOverWorkModelFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '早出残業開始時刻',
      required: true
    }
  },
  {
    key: 'start',
    type: 'time',
    templateOptions: {
      label: '早出残業開始時刻',
      required: true
    }
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      label: '早出残業理由',
      required: false,
      rows: '3'
    }
  }
];
