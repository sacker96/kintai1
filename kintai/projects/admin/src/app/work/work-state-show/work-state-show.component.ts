import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work-state-show',
  templateUrl: './work-state-show.component.html',
  styles: []
})
export class WorkStateShowComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: WorkStateFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const WorkStateFilterFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '日付',
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
    key: 'retirement',
    type: 'select',
    templateOptions: {
      label: '在職・退職',
      required: false,
      options: [
        {
          label: '在職',
          value: '在職'
        },
        {
          label: '退職',
          value: '退職'
        }
      ]
    }
  },
  {
    key: 'number_par_page',
    type: 'select',
    templateOptions: {
      label: '表示数',
      required: false,
      options: [
        {
          label: '15',
          value: '15'
        },
        {
          label: '30',
          value: '30'
        },
        {
          label: '60',
          value: '60'
        },
        {
          label: '120',
          value: '120'
        },
        {
          label: '180',
          value: '180'
        }
      ]
    }
  },
  {
    key: 'sort_order',
    type: 'select',
    templateOptions: {
      label: '並び順',
      required: false,
      options: [
        {
          label: '通常',
          value: '通常'
        },
        {
          label: '遅刻者優先',
          value: '遅刻者優先'
        },
        {
          label: '勤務中優先',
          value: '勤務中優先'
        },
        {
          label: '休憩中優先',
          value: '休憩中優先'
        },
        {
          label: '退勤済優先',
          value: '退勤済優先'
        }
      ]
    }
  }
];
