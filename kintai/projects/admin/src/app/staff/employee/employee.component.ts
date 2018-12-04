import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { EmployeeRepository } from 'projects/shared/src/lib/infra/employeeRepository';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {
  @ViewChild('nameTemplate')
  nameTemplate: TemplateRef<any>;
  @ViewChild('linkTemplate')
  linkTemplate: TemplateRef<any>;
  @ViewChild('mypageTemplate')
  mypageTemplate: TemplateRef<any>;
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeFilterFields
  };
  columns: any;
  rows: Array<any>;

  constructor(
    private procResultService: ProcResultService,
    private employeeRepository: EmployeeRepository
  ) {}

  async ngOnInit() {
    this.columns = [
      { prop: 'employee_code', name: 'スタッフコード' },
      { prop: 'name', name: '氏名', cellTemplate: this.nameTemplate },
      { prop: 'email', name: 'メールアドレス' },
      { prop: 'link', name: '機能リンク', cellTemplate: this.linkTemplate },
      { prop: 'mypage', name: 'マイページ', cellTemplate: this.mypageTemplate }
    ];
    this.rows = await this.getEmployeeList(this.filter.form.value);
  }

  submit() {
    this.procResultService.filter(
      this.filter.form.valid,
      async () =>
        (this.rows = await this.getEmployeeList(this.filter.form.value))
    );
  }

  getEmployeeList(filter: any) {
    return this.employeeRepository.find({}).then(list => {
      return list.filter(v => {
        if (filter.e_code) {
          return v.employee_code === filter.e_code;
        } else {
          return true;
        }
      }).filter(v => {
        if (filter.name) {
          return v.lname === filter.name || v.fname === filter.name;
        } else {
          return true;
        }
      }).filter(v => {
        if (filter.tags) {
          return v.tags === filter.tags;
        } else {
          return true;
        }
      }).filter(v => {
        if (filter.email) {
          return v.email === filter.email;
        } else {
          return true;
        }
      })
    });
  }
}

const EmployeeFilterFields = [
  {
    key: 'e_code',
    type: 'input',
    templateOptions: {
      label: 'スタッフコード',
      required: false
    }
  },
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '氏名',
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
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'メールアドレス',
      required: false
    }
  },
  {
    key: 'retirement',
    type: 'select',
    templateOptions: {
      label: '在職・退職',
      placeholder: '在職・退職',
      required: false,
      options: [
        {
          label: '全て',
          value: '全て'
        },
        {
          label: '在職',
          value: '在職'
        },
        {
          label: '退職',
          value: '退職'
        },
        {
          label: '退職予定',
          value: '退職予定'
        }
      ]
    }
  }
];
