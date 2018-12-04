import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { ConfigRepository as IConfigRepository } from 'core/repository/configRepository';
import { Config } from 'core/entity/config';

declare var require: any;
const getConfigs = require('graphql-tag/loader!./queries/getConfigs.graphql');
const getConfig = require('graphql-tag/loader!./queries/getConfig.graphql');
const updateConfig = require('graphql-tag/loader!./mutations/updateConfig.graphql');

@Injectable({
  providedIn: 'root'
})
export class ConfigRepository extends BaseRepository<Config> implements IConfigRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  save(item: Config[]): Promise<boolean> {
    return this.mutate('updateConfig', updateConfig, { item })
      .then(result => {
        if (result.name) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Config[]> {
    return this.query('configs', getConfigs);
  }

  findOne(id: string): Promise<Config> {
    return this.query('config', getConfig, { id });
  }
}
