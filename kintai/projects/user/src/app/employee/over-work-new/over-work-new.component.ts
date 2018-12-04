import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-over-work-new',
  templateUrl: './over-work-new.component.html',
  styles: []
})
export class OverWorkNewComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: OverWorkModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const OverWorkModelFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '残業希望日',
      required: true
    }
  },
  {
    key: 'end',
    type: 'time',
    templateOptions: {
      label: '残業時刻',
      required: true
    }
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      label: '残業理由',
      required: false,
      rows: '3'
    }
  }
];
