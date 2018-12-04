import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { EmployeeRepository } from 'projects/shared/src/lib/infra/employeeRepository';
import { Employee } from 'core/entity/employee';
import { AttendanceRepository } from 'projects/shared/src/lib/infra/attendanceRepository';
import { Attendance } from 'core/entity/attendance';

@Component({
  selector: 'app-adit-manage',
  templateUrl: './adit-manage.component.html',
  styles: []
})
export class AditManageComponent implements OnInit {
  @ViewChild('nameTemplate')
  nameTemplate: TemplateRef<any>;
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AditManageFilterFields
  };
  columns: any;
  rows: Array<any>;

  constructor(
    private procResultService: ProcResultService,
    private employeeRepository: EmployeeRepository,
    private attendanceRepository: AttendanceRepository,
  ) {}

  async ngOnInit() {
    this.filter.model.date = moment();

    this.columns = [
      { prop: 'name', name: 'スタッフ', cellTemplate: this.nameTemplate },
      { prop: 'a', name: '勤怠状況' },
      { prop: 'a', name: '修正依頼' },
      { prop: 'start', name: '出勤時刻' },
      { prop: 'end', name: '退勤時刻' },
      { prop: 'work', name: '労働時間' },
      { prop: 'rest', name: '休憩時間' },
      { prop: 'overwork', name: '残業時間' },
      { prop: 'nighttime', name: '深夜時間' },
      { prop: 'a', name: '遅刻取消' },
      { prop: 'detail', name: '詳細' },
    ];
    const list = await this.getEmployeeList(this.filter.form.value);
    this.rows = await this.getAttendances(list);
  }

  submit() {
    this.procResultService.filter(
      this.filter.form.valid,
      async () => {
        const list = await this.getEmployeeList(this.filter.form.value);
        this.rows = await this.getAttendances(list);
      }
    );
  }

  async getAttendances(list: Employee[]) {
    const ret: any = [];
    for(let e of list) {
      let attendance = await this.getAttendance(e, this.filter.form.value['date']);
      if (attendance.length == 0) {
        attendance[0] = new Attendance({});
      }
      attendance[0].calc();
      ret.push({
        ...attendance[0],
        ...e,
      });
    }
    return ret;
  }

  async getAttendance(employee, date) {
    return this.attendanceRepository.find({
      from: date.format('YYYY-MM-DD'),
      to: date.clone().add(1, 'day').format('YYYY-MM-DD'),
      employeeId: employee.id
    });
  }

  getEmployeeList(filter: any) {
    return this.employeeRepository.find({});
  }
}

const AditManageFilterFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '表示日',
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
    key: 'name',
    type: 'staff',
    templateOptions: {
      label: 'スタッフ',
      required: false
    }
  }
];
