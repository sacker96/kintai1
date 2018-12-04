import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { ClosingRepository as IClosingRepository } from 'core/repository/closingRepository';
import { Closing } from 'core/entity/closing';

declare var require: any;
const getClosings = require('graphql-tag/loader!./queries/getClosings.graphql');
const getClosing = require('graphql-tag/loader!./queries/getClosing.graphql');
const createClosing = require('graphql-tag/loader!./mutations/createClosing.graphql');
const updateClosing = require('graphql-tag/loader!./mutations/updateClosing.graphql');

@Injectable({
  providedIn: 'root'
})
export class ClosingRepository extends BaseRepository<Closing> implements IClosingRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Closing): Promise<boolean> {
    return this.mutate('createClosing', createClosing, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Closing): Promise<boolean> {
    return this.mutate('updateClosing', updateClosing, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Closing[]> {
    return this.query('closings', getClosings);
  }

  findOne(id: string): Promise<Closing> {
    return this.query('closing', getClosing, { id });
  }
}
