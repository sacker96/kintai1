import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { {Name}Repository as I{Name}Repository } from 'core/repository/{name}Repository';
import { {Name} } from 'core/entity/{name}';

declare var require: any;
const get{Name}s = require('graphql-tag/loader!./queries/get{Name}s.graphql');
const get{Name} = require('graphql-tag/loader!./queries/get{Name}.graphql');
const create{Name} = require('graphql-tag/loader!./mutations/create{Name}.graphql');
const update{Name} = require('graphql-tag/loader!./mutations/update{Name}.graphql');

@Injectable({
  providedIn: 'root'
})
export class {Name}Repository extends BaseRepository<{Name}> implements I{Name}Repository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: {Name}): Promise<boolean> {
    return this.mutate('create{Name}', create{Name}, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: {Name}): Promise<boolean> {
    return this.mutate('update{Name}', update{Name}, { item })
      .then(result => {
        if (result.id) { return true; }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<{Name}[]> {
    return this.query('{name}s', get{Name}s);
  }

  findOne(systemId: string): Promise<{Name}> {
    console.log(systemId);
    return this.query('{name}', get{Name}, { id: systemId });
  }
}
