import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { HolidayAppriedRepository as IHolidayAppriedRepository } from 'core/repository/holidayAppriedRepository';
import { HolidayAppried } from 'core/entity/holidayAppried';

declare var require: any;
const getHolidayApprieds = require('graphql-tag/loader!./queries/getHolidayApprieds.graphql');
const getHolidayAppried = require('graphql-tag/loader!./queries/getHolidayAppried.graphql');
const createHolidayAppried = require('graphql-tag/loader!./mutations/createHolidayAppried.graphql');
const updateHolidayAppried = require('graphql-tag/loader!./mutations/updateHolidayAppried.graphql');

@Injectable({
  providedIn: 'root'
})
export class HolidayAppriedRepository extends BaseRepository<HolidayAppried> implements IHolidayAppriedRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: HolidayAppried): Promise<boolean> {
    return this.mutate('createHolidayAppried', createHolidayAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: HolidayAppried): Promise<boolean> {
    return this.mutate('updateHolidayAppried', updateHolidayAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<HolidayAppried[]> {
    return this.query('holidayApprieds', getHolidayApprieds);
  }

  findOne(id: string): Promise<HolidayAppried> {
    return this.query('holidayAppried', getHolidayAppried, { id });
  }
}
