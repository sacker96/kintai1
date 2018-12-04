import { Injectable } from '@angular/core';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

declare var require: any;
const login = require('graphql-tag/loader!./mutations/login.graphql');
const adminlogin = require('graphql-tag/loader!./mutations/adminlogin.graphql');
const masterlogin = require('graphql-tag/loader!./mutations/masterlogin.graphql');
const refresh = require('graphql-tag/loader!./mutations/refresh.graphql');

@Injectable({
  providedIn: 'root'
})
export class AuthRepository {
  constructor(public apollo: Apollo) {}

  login(systemId: string, email: string, password: string) {
    return this.mutate('login', login, { systemId, email, password });
  }

  adminlogin(systemId: string, email: string, password: string) {
    return this.mutate('adminlogin', adminlogin, { systemId, email, password });
  }

  masterlogin(email: string, password: string) {
    return this.mutate('masterlogin', masterlogin, { email, password });
  }

  refresh() {
    return this.mutate('refresh', refresh, {});
  }

  logout() {
    return this.apollo.getClient().resetStore();
  }

  private query(name: string, query: any, variables: any = {}): Promise<any> {
    return this.apollo
      .query({
        query,
        variables
      })
      .pipe(
        map((result: any) => {
          return result.data[name];
        })
      )
      .toPromise();
  }

  private mutate(name: string, mutation: any, variables: any): Promise<any> {
    return this.apollo
      .mutate({
        mutation,
        variables
      })
      .pipe(
        map((result: any) => {
          return result.data[name];
        })
      )
      .toPromise();
  }
}
