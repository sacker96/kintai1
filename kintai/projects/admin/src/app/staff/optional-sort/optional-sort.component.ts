import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { EmployeeRepository } from 'projects/shared/src/lib/infra/employeeRepository';

@Component({
  selector: 'app-optional-sort',
  templateUrl: './optional-sort.component.html',
  styles: []
})
export class OptionalSortComponent implements OnInit {
  @ViewChild('nameTemplate')
  nameTemplate: TemplateRef<any>;
  columns: any;
  rows: any;

  constructor(private employeeRepository: EmployeeRepository) {}

  async ngOnInit() {
    this.columns = [
      { prop: 'name', name: '氏名', cellTemplate: this.nameTemplate },
      { prop: 'email', name: 'メールアドレス' },
      { prop: 'employee_code', name: 'スタッフコード' },
      { prop: 'order', name: '順番' }
    ];
    this.rows = await this.getEmployeeList({});
  }

  submit() {

  }

  getEmployeeList(filter: any) {
    return this.employeeRepository.find({});
  }
}
