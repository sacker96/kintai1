import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-over-work-applied',
  templateUrl: './employee-over-work-applied.component.html',
  styles: []
})
export class EmployeeOverWorkAppliedComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeOverWorkAppliedFilterFields
  };

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.filter.form.valid) {
      //
    }
  }
}

const EmployeeOverWorkAppliedFilterFields = [
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
  // {
  //   key: 'my_status',
  //   type: 'radio',
  //   templateOptions: {
  //     label: '自分の対応状況',
  //     required: false,
  //     options: [
  //       {
  //         label: '指定なし',
  //         value: '指定なし'
  //       },
  //       {
  //         label: '自分が未対応である申請',
  //         value: '自分が未対応である申請'
  //       },
  //       {
  //         label: '自分が承認済である申請',
  //         value: '自分が承認済である申請'
  //       },
  //       {
  //         label: '自分が却下済である申請',
  //         value: '自分が却下済である申請'
  //       }
  //     ]
  //   }
  // },
  // {
  //   key: 'other_status',
  //   type: 'radio',
  //   templateOptions: {
  //     label: '自分以外の承認者の対応状況',
  //     required: false,
  //     options: [
  //       {
  //         label: '指定なし',
  //         value: '指定なし'
  //       },
  //       {
  //         label: '未対応の承認者がいる申請',
  //         value: '未対応の承認者がいる申請'
  //       },
  //       {
  //         label: '承認済の承認者がいる申請',
  //         value: '承認済の承認者がいる申請'
  //       },
  //       {
  //         label: '却下済の承認者がいる申請',
  //         value: '却下済の承認者がいる申請'
  //       }
  //     ]
  //   }
  // },
  {
    key: 'application_status',
    type: 'radio',
    templateOptions: {
      label: '申請の対応状況',
      required: false,
      options: [
        {
          label: '指定なし',
          value: '指定なし'
        },
        {
          label: '未対応の申請',
          value: '未対応の申請'
        },
        {
          label: '承認済の申請',
          value: '承認済の申請'
        },
        {
          label: '却下済の申請',
          value: '却下済の申請'
        }
      ]
    }
  }
];
