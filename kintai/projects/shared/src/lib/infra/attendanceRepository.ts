import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { AttendanceRepository as IAttendanceRepository } from 'core/repository/attendanceRepository';
import { Attendance } from 'core/entity/attendance';
import { GetAttendancesVariables } from './types/GetAttendances';

declare var require: any;
const getAttendances = require('graphql-tag/loader!./queries/getAttendances.graphql');
const getAttendance = require('graphql-tag/loader!./queries/getAttendance.graphql');
const createAttendance = require('graphql-tag/loader!./mutations/createAttendance.graphql');
const updateAttendance = require('graphql-tag/loader!./mutations/updateAttendance.graphql');

@Injectable({
  providedIn: 'root'
})
export class AttendanceRepository extends BaseRepository<Attendance> implements IAttendanceRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Attendance): Promise<boolean> {
    return this.mutate('createAttendance', createAttendance, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Attendance): Promise<boolean> {
    return this.mutate('updateAttendance', updateAttendance, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: GetAttendancesVariables): Promise<Attendance[]> {
    return this.query('attendances', getAttendances, searchParam).then(list => list.map(v => new Attendance(v)));
  }

  findOne(id: string): Promise<Attendance> {
    return this.query('attendance', getAttendance, { id });
  }
}
