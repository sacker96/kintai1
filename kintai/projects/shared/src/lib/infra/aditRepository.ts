import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { AditRepository as IAditRepository } from 'core/repository/aditRepository';
import { Adit } from 'core/entity/adit';

declare var require: any;
const getAdits = require('graphql-tag/loader!./queries/getAdits.graphql');
const getAditsByDate = require('graphql-tag/loader!./queries/getAditsByDate.graphql');
const getAdit = require('graphql-tag/loader!./queries/getAdit.graphql');
const createAdit = require('graphql-tag/loader!./mutations/createAdit.graphql');
const updateAdit = require('graphql-tag/loader!./mutations/updateAdit.graphql');
const createAditByFelica = require('graphql-tag/loader!./mutations/createAditByFelica.graphql');

@Injectable({
  providedIn: 'root'
})
export class AditRepository extends BaseRepository<Adit> implements IAditRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  createByFelica(felica: string): Promise<boolean> {
    return this.mutate('createAditByFelica', createAditByFelica, { felica })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  create(item: Adit): Promise<boolean> {
    return this.mutate('createAdit', createAdit, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Adit): Promise<boolean> {
    return this.mutate('updateAdit', updateAdit, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  findByDate(searchParam: any): Promise<Adit[]> {
    return this.query('aditsByDate', getAditsByDate, searchParam);
  }

  find(searchParam: any): Promise<Adit[]> {
    return this.query('adits', getAdits);
  }

  findOne(id: string): Promise<Adit> {
    return this.query('adit', getAdit, { id });
  }
}
