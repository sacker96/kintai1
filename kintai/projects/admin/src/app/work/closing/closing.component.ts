import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-closing',
  templateUrl: './closing.component.html',
  styles: []
})
export class ClosingComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ClosingFilterFields
  };

  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: ClosingReminderModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const ClosingFilterFields = [
  {
    key: 'date',
    type: 'specdate',
    templateOptions: {
      label: '指定月',
      required: false,
      range: false
    }
  }
];

const ClosingReminderModelFields = [
  {
    key: 'remind',
    type: 'checkbox',
    templateOptions: {
      label: '通知',
      required: false,
      options: [
        {
          label: '締日の前日',
          value: '締日の前日'
        },
        {
          label: '当日',
          value: '当日'
        },
        {
          label: '翌日',
          value: '翌日'
        },
        {
          label: '翌々日',
          value: '翌々日'
        },
        {
          label: '3日後',
          value: '3日後'
        },
        {
          label: '4日後',
          value: '4日後'
        },
        {
          label: '5日後',
          value: '5日後'
        },
        {
          label: '6日後',
          value: '6日後'
        },
        {
          label: '7日後',
          value: '7日後'
        },
        {
          label: '8日後',
          value: '8日後'
        },
        {
          label: '9日後',
          value: '9日後'
        },
        {
          label: '10日後',
          value: '10日後'
        }
      ]
    }
  }
];
