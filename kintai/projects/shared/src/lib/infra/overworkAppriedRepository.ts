import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { OverworkAppriedRepository as IOverworkAppriedRepository } from 'core/repository/overworkAppriedRepository';
import { OverworkAppried } from 'core/entity/overworkAppried';

declare var require: any;
const getOverworkApprieds = require('graphql-tag/loader!./queries/getOverworkApprieds.graphql');
const getOverworkAppried = require('graphql-tag/loader!./queries/getOverworkAppried.graphql');
const createOverworkAppried = require('graphql-tag/loader!./mutations/createOverworkAppried.graphql');
const updateOverworkAppried = require('graphql-tag/loader!./mutations/updateOverworkAppried.graphql');

@Injectable({
  providedIn: 'root'
})
export class OverworkAppriedRepository extends BaseRepository<OverworkAppried> implements IOverworkAppriedRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: OverworkAppried): Promise<boolean> {
    return this.mutate('createOverworkAppried', createOverworkAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: OverworkAppried): Promise<boolean> {
    return this.mutate('updateOverworkAppried', updateOverworkAppried, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<OverworkAppried[]> {
    return this.query('overworkApprieds', getOverworkApprieds);
  }

  findOne(id: string): Promise<OverworkAppried> {
    return this.query('overworkAppried', getOverworkAppried, { id });
  }
}
