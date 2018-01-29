import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './containers/app';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://graphql-pokemon.now.sh/graphql'}),
  cache: new InMemoryCache()
});

const app = (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);
ReactDOM.render(
  app,
  document.getElementById('root')
);
