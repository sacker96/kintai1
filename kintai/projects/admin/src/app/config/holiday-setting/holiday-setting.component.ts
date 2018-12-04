import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holiday-setting',
  templateUrl: './holiday-setting.component.html',
  styles: []
})
export class HolidaySettingComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: HolidaySettingModelFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const HolidaySettingModelFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: 'calendar',
      required: false
    }
  }
];
