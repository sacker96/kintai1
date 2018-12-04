import { Apollo } from 'apollo-angular';
import { map, catchError, mergeMap } from 'rxjs/operators';

import { Repository } from 'core/repository/repository';

export abstract class BaseRepository<T> implements Repository<T> {
  constructor(public apollo: Apollo) {}

  query(name: string, query: any, variables: any = {}): Promise<any> {
    return this.apollo
      .query({
        query,
        variables
      })
      .pipe(map((result: any) => result.data[name]))
      .toPromise();
  }

  mutate(name: string, mutation: any, variables: any): Promise<any> {
    return this.apollo
      .mutate({
        mutation,
        variables
      })
      .pipe(
        map((result: any) => result.data[name]),
        mergeMap(result => {
          return this.apollo
            .getClient()
            .resetStore()
            .then(() => {
              return result;
            });
        })
      )
      .toPromise();
  }

  upsert(item: any): Promise<boolean> {
    delete item.created;
    delete item.updated;
    if (item.id === undefined) {
      return this.create(item);
    } else {
      return this.update(item);
    }
  }

  create(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  find(searchParam: any): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
