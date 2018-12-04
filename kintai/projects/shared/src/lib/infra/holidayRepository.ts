import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { HolidayRepository as IHolidayRepository } from 'core/repository/holidayRepository';
import { Holiday } from 'core/entity/holiday';

declare var require: any;
const getHolidays = require('graphql-tag/loader!./queries/getHolidays.graphql');
const getHoliday = require('graphql-tag/loader!./queries/getHoliday.graphql');
const createHoliday = require('graphql-tag/loader!./mutations/createHoliday.graphql');
const updateHoliday = require('graphql-tag/loader!./mutations/updateHoliday.graphql');

@Injectable({
  providedIn: 'root'
})
export class HolidayRepository extends BaseRepository<Holiday> implements IHolidayRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Holiday): Promise<boolean> {
    return this.mutate('createHoliday', createHoliday, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Holiday): Promise<boolean> {
    return this.mutate('updateHoliday', updateHoliday, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Holiday[]> {
    return this.query('holidays', getHolidays);
  }

  findOne(id: string): Promise<Holiday> {
    return this.query('holiday', getHoliday, { id });
  }
}
