import { NgModule } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { AuthService } from 'projects/shared/src/lib/service/auth.service';

const uri = environment.endpoint;

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink, authService: AuthService) {
    const http = httpLink.create({ uri });
    const auth = setContext(async (_, { headers }) => {
      let token = authService.getCachedAccessToken();
      if (!token) {
        await authService.acquireToken();
        token = authService.getCachedAccessToken();
      }
      return {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      };
    });
    const link = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
          if (message === 'jwt expired') {
            authService.logout();
            window.location.reload();
          }
        });
    });
    apollo.create({
      link: link.concat(auth.concat(http)),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
      }
    });
  }
}
