import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { EmployeeRepository } from 'projects/shared/src/lib/infra/employeeRepository';
import { Employee } from 'core/entity/employee';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styles: []
})
export class EditInfoComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeLimitedModelFields
  };

  constructor(
    private procResultService: ProcResultService,
    private employeeRepository: EmployeeRepository
  ) {}

  async ngOnInit() {
    this.vm.model = await this.getMe();
  }

  submit() {
    this.procResultService.proc(this.vm.form.valid, () =>
      this.saveEmployee(new Employee(this.vm.model))
    );
  }

  async getMe() {
    return this.employeeRepository.me();
  }

  async saveEmployee(item: Employee): Promise<boolean> {
    return this.employeeRepository.upsert(item);
  }
}

const EmployeeLimitedModelFields = [
  {
    fieldGroupClassName: 'form-inline',
    fieldGroup: [
      {
        key: 'lname',
        type: 'static',
        templateOptions: {
          label: '姓',
          required: true
        },
      },
      {
        key: 'fname',
        type: 'static',
        templateOptions: {
          label: '名',
          required: true
        },
      },
    ],
  },
  {
    key: 'tel',
    type: 'input',
    templateOptions: {
      label: '電話番号',
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
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'パスワード',
      type: 'password',
      required: false
    }
  }
];
