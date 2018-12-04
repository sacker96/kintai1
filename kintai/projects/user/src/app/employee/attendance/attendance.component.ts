import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import 'moment/locale/ja';
import * as moment from 'moment';
import { AttendanceRepository } from 'projects/shared/src/lib/infra/attendanceRepository';
import { GetAttendancesVariables } from 'projects/shared/src/lib/infra/types/GetAttendances';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styles: []
})
export class AttendanceComponent implements OnInit {
  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AttendanceFilterFields
  };

  selectedDate: string;

  columns: any;
  rows: any;

  constructor(private attendanceRepository: AttendanceRepository) {}

  ngOnInit() {
    this.filter.model = {
      specdate: moment().format('Y/M')
    };
    try {
      const hashModel = JSON.parse(decodeURI(window.location.hash.replace('#','')));
      if (hashModel) {
        this.filter.model = hashModel;
      }
    } catch(e) {}
    this.setSelectedDate(this.filter.model.specdate);
  }

  submit() {
    if (this.filter.form.valid) {
      window.location.hash = JSON.stringify(this.filter.model);
      this.setSelectedDate(this.filter.model.specdate);
    }
  }

  private async setSelectedDate(date: string) {
    this.selectedDate = date;
    this.columns = [
      { prop: 'date', name: '日付' },
      { prop: 'holiday', name: '休日区分' },
      { prop: 'start', name: '実働出勤' },
      { prop: 'end', name: '実働退勤' },
      { prop: 'work', name: '労働時間' },
      { prop: 'overwork', name: '残業時間' },
      { prop: 'nighttime', name: '深夜時間' },
      { prop: 'rest', name: '休憩時間' },
      { prop: 'status', name: '勤怠状況' }
    ];
    this.rows = await this.getAttendanceList();
  }

  async getAttendanceList() {
    const rows: any = [];
    const days: any[] = [];
    let from: string = '';
    let to: string = '';

    if (this.selectedDate.match(/^\d\d\d\d\/\d\d$/)) {
      const m = moment(this.selectedDate + '/01', 'YYYY/MM/DD');
      from = m.format('YYYY-MM-DD');
      const lastDay = parseInt(m.endOf('month').format('D'), 10);
      for (let i = 1; i <= lastDay; i++) {
        const m = moment(this.selectedDate + '/' + i, 'YYYY/MM/DD');
        days.push(m);
        to = m.format('YYYY-MM-DD');
      }
    } else if (
      this.selectedDate.match(/\d\d\d\d\/\d\d\/\d\d\-\d\d\d\d\/\d\d\/\d\d/)
    ) {
      const [start, end] = this.selectedDate.split('-');
      const m = moment(start, 'YYYY/MM/DD');
      from = m.format('YYYY-MM-DD');
      const mEnd = moment(end, 'YYYY/MM/DD');
      while (m.isSameOrBefore(mEnd)) {
        days.push(m);
        to = m.format('YYYY-MM-DD');
        m.add(1, 'day');
      }
    }

    const findOption = {
      employeeId: '',
      from, to
    };
    const attendances = await this.attendanceRepository.find(findOption);

    days.forEach(m => {
      const row = {
        date: m.format('MM/DD(dd)'),
        holiday: '',
        start: '',
        end: '',
        work: '',
        overwork: '',
        nighttime: '',
        rest: '',
        status: ''
      };
      const attendance = attendances.find(v => v.date === m.format('YYYY-MM-DD'));
      if (attendance) {
        row.holiday = attendance.holiday;
        row.start = attendance.start;
        row.end = attendance.end;
        row.work = attendance.work;
        row.overwork = attendance.overwork;
        row.nighttime = attendance.nighttime;
        row.rest = attendance.rest;
        // row.status = attendance.status;
      }
      rows.push(row);
    });
    return rows;
  }
}

const AttendanceFilterFields = [
  {
    key: 'specdate',
    type: 'specdate',
    templateOptions: {
      label: '指定月指定期間',
      required: false
    }
  }
];
