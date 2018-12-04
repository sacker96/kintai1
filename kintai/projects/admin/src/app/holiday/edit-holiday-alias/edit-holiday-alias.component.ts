import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-holiday-alias',
  templateUrl: './edit-holiday-alias.component.html',
  styles: []
})
export class EditHolidayAliasComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EditHolidayAliasModelFields
  };

  constructor() {}

  ngOnInit() {
    this.vm.model = {
      status: ''
    };
  }

  submit() {
    if (this.vm.form.valid) {
      //
    }
  }
}

const EditHolidayAliasModelFields = [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '休暇名',
      required: false
    }
  },
  {
    key: 'short',
    type: 'input',
    templateOptions: {
      label: '休暇略称',
      required: false
    }
  },
  {
    key: 'status',
    type: 'static',
    templateOptions: {
      label: '設定状況(休暇タイプ設定) ',
      required: false
    }
  }
];
