import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseRepository } from './baseRepository';
import { AccountRepository as IAccountRepository } from 'core/repository/accountRepository';
import { Account } from 'core/entity/account';

declare var require: any;
const getAccounts = require('graphql-tag/loader!./queries/getAccounts.graphql');
const getAccount = require('graphql-tag/loader!./queries/getAccount.graphql');
const createAccount = require('graphql-tag/loader!./mutations/createAccount.graphql');
const updateAccount = require('graphql-tag/loader!./mutations/updateAccount.graphql');

@Injectable({
  providedIn: 'root'
})
export class AccountRepository extends BaseRepository<Account>
  implements IAccountRepository {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  create(item: Account): Promise<boolean> {
    return this.mutate('createAccount', createAccount, { item })
      .then(result => {
        if (result.id) {
          return true;
        }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  update(item: Account): Promise<boolean> {
    return this.mutate('updateAccount', updateAccount, { item })
      .then(result => {
        if (result.id) {
          return true;
        }
        return false;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  find(searchParam: any): Promise<Account[]> {
    return this.query('accounts', getAccounts);
  }

  findOne(systemId: string): Promise<Account> {
    return this.query('account', getAccount, { systemId: systemId });
  }
}
