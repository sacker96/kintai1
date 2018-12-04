import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { HolidayWorkingAppriedRepository as IHolidayWorkingAppriedRepository } from 'core/repository/holidayWorkingAppriedRepository';
import { HolidayWorkingAppried } from 'core/entity/holidayWorkingAppried';

declare var require: any;
const getHolidayWorkingApprieds = require('graphql-tag/loader!./queries/getHolidayWorkingApprieds.graphql');
const getHolidayWorkingAppried = require('graphql-tag/loader!./queries/getHolidayWorkingAppried.graphql');
const createHolidayWorkingAppried = require('graphql-tag/loader!./mutations/createHolidayWorkingAppried.graphql');
const updateHolidayWorkingAppried = require('graphql-tag/loader!./mutations/updateHolidayWorkingAppried.graphql');

@Injectable({
  providedIn: 'root'
})
export class HolidayWorkingAppriedRepository extends BaseRepository<HolidayWorkingAppried> implements IHolidayWorkingAppriedRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: HolidayWorkingAppried): Promise<boolean> {
    return this.mutate('createHolidayWorkingAppried', createHolidayWorkingAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: HolidayWorkingAppried): Promise<boolean> {
    return this.mutate('updateHolidayWorkingAppried', updateHolidayWorkingAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<HolidayWorkingAppried[]> {
    return this.query('holidayWorkingApprieds', getHolidayWorkingApprieds);
  }

  findOne(id: string): Promise<HolidayWorkingAppried> {
    return this.query('holidayWorkingAppried', getHolidayWorkingAppried, { id });
  }
}
