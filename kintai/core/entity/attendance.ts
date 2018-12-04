import * as moment from 'moment';

export class Attendance {
  id?: string;
  employeeId: number;
  date: string;
  holiday: string;
  status: string;
  free_note: string;
  start: string;
  end: string;
  work: string;
  rest: string;
  overwork: string;
  nighttime: string;
  created?: string;
  updated?: string;

  constructor(data: any) {
    this.id = data.id;
    this.employeeId = data.employeeId;
    this.date = data.date;
    this.holiday = data.holiday;
    this.status = data.status;
    this.free_note = data.free_note;
    this.start = data.start;
    this.end = data.end;
    this.work = data.work;
    this.rest = data.rest;
    this.overwork = data.overwork;
    this.nighttime = data.nighttime;
    this.created = data.created;
    this.updated = data.updated;
  }

  calc() {
    if (this.end === null) {
      this.work = '' + (moment().diff(moment(this.date + ' ' + this.start), 'minutes') - parseInt(this.rest));
    }
  }
}
