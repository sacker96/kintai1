import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { EmployeeHolidayRepository as IEmployeeHolidayRepository } from 'core/repository/employeeHolidayRepository';
import { EmployeeHoliday } from 'core/entity/employeeHoliday';

declare var require: any;
const getEmployeeHolidays = require('graphql-tag/loader!./queries/getEmployeeHolidays.graphql');
const getEmployeeHoliday = require('graphql-tag/loader!./queries/getEmployeeHoliday.graphql');
const createEmployeeHoliday = require('graphql-tag/loader!./mutations/createEmployeeHoliday.graphql');
const updateEmployeeHoliday = require('graphql-tag/loader!./mutations/updateEmployeeHoliday.graphql');

@Injectable({
  providedIn: 'root'
})
export class EmployeeHolidayRepository extends BaseRepository<EmployeeHoliday> implements IEmployeeHolidayRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: EmployeeHoliday): Promise<boolean> {
    return this.mutate('createEmployeeHoliday', createEmployeeHoliday, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: EmployeeHoliday): Promise<boolean> {
    return this.mutate('updateEmployeeHoliday', updateEmployeeHoliday, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<EmployeeHoliday[]> {
    return this.query('employeeHolidays', getEmployeeHolidays);
  }

  findOne(id: string): Promise<EmployeeHoliday> {
    return this.query('employeeHoliday', getEmployeeHoliday, { id });
  }
}
